// eslint-disable-next-line
import {Component} from 'react'

// eslint-disable-next-line
import {v4 as uuidv4} from 'uuid'

import './index.css'

class Appointments extends Component {
  render() {
    return (
      <div>
        <div className="d-flex flex-row justify-content-center margi">
          <form className="margi">
            <h1>Add Appointment</h1>
            <div className="d-flex flex-column pad">
              <label htmlFor="title">TITLE</label>
              <input type="text" id="title" placeholder="enter title" />
            </div>
            <div className="d-flex flex-column pad">
              <label htmlFor="date">DATE</label>
              <input type="date" id="date" placeholder="dd/mm/yyyy" />
            </div>
            <button className="margi" type="submit">
              Add
            </button>
          </form>
          <div className="margi">
            <img
              alt="appointments"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
            />
          </div>
        </div>
        <hr className="col" />
        <div className="d-flex flex-row justify-content-center margi">
          <h1>Appointments</h1>
          <button className="but">Starred</button>
        </div>
      </div>
    )
  }
}

export default Appointments
