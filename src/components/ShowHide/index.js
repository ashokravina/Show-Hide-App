// Write your code here

import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}
  FristButton = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }
  LastButton = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }
  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <div className="button-card">
            <button className="button" type="button" onClick={this.FristButton}>
              Show/Hide Firstname
            </button>
            {firstName ? <p className="para">Ashok</p> : ''}
          </div>
          <div className="button-card">
            <button className="button" type="button" onClick={this.LastButton}>
              Show/Hide Lastname
            </button>
            {lastName ? <p className="para">Kumar</p> : ''}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
