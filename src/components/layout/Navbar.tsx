import {Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/" className='nav__title'>Product list</Link>
      <div className="nav__buttons">
        <Link to="/addproduct" className='nav__buttons-btn-ghost'>Add</Link>
        <button className='nav__buttons-btn-ghost nav__button'>Mass delete</button>
      </div>
    </nav>
  )
}

export default Navbar
