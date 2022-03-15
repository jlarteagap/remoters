import React from 'react'
import PropTypes from 'prop-types'

const BurgerMenu = ({ isActive, onClick }) => (
  <div
    onClick={onClick}
    role="button"
    className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
    aria-label="menu"
    aria-expanded="false"
    data-target="navbarBasicExample"
  >
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </div>
)

BurgerMenu.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func
}
export default BurgerMenu
