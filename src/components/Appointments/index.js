import {Component} from 'react'
import {v4} from 'uuid'

import CommentItem from '../AppointmentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    nameInput: '',
    commentInput: '',
    commentsList: [],
  }

  deleteComment = commentId => {
    const {commentsList} = this.state

    this.setState({
      commentsList: commentsList.filter(comment => comment.id !== commentId),
    })
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  renderCommentsList = () => {
    const {commentsList} = this.state

    return commentsList.map(eachComment => (
      <CommentItem
        key={eachComment.id}
        commentDetails={eachComment}
        toggleIsLiked={this.toggleIsLiked}
        deleteComment={this.deleteComment}
      />
    ))
  }

  onAddComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: v4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  onChangeCommentInput = event => {
    this.setState({
      commentInput: event.target.value,
    })
  }

  onChangeNameInput = event => {
    this.setState({
      nameInput: event.target.value,
    })
  }

  render() {
    const {nameInput, commentInput, commentsList} = this.state

    return (
      <div className="app-container">
        <div className="comments-container">
          <h1 className="app-heading">Add Appointment</h1>
          <div className="comments-inputs">
            <form className="form" onSubmit={this.onAddComment}>
              <label htmlFor="title">TITLE</label>
              <input
                id="title"
                type="text"
                className="name-input"
                placeholder="Purspose"
                value={nameInput}
                onChange={this.onChangeNameInput}
              />
              <label htmlFor="date">Date</label>
              <input
                id="date"
                type="date"
                className="comment-input"
                value={commentInput}
                onChange={this.onChangeCommentInput}
              />
              <button type="submit" data-testid="star" className="add-button">
                Add
              </button>
            </form>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>

          <hr className="line" />
          <h1 className="heading">
            <span className="comments-count">{commentsList.length}</span>
            Appointments
          </h1>
          <button data-testid="star">Starred</button>
          <ul className="comments-list">{this.renderCommentsList()}</ul>
        </div>
      </div>
    )
  }
}

export default Comments
