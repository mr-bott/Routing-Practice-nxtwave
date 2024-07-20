// Write your JS code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'
class Header extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="side">
          <img
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
            alt="wave"
            className="img-logo"
          />
          <p className="headings">Wave</p>
        </div>
        <div className="side1">
          <Link className="headings" to="/">
            Home
          </Link>
          <Link className="headings" to="/about">
            About
          </Link>
          <Link className="headings" to="/contact">
            Contact
          </Link>
        </div>
      </nav>
    )
  }
}
export default Header
