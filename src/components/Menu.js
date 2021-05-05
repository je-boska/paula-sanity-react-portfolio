import React, { useState } from 'react'

const Menu = ({ projects, viewContact, setViewContact }) => {
  const [displayMenu, setDisplayMenu] = useState(false)

  const toggleMenu = () => {
    setDisplayMenu(!displayMenu)
  }

  return (
    <>
      <div className='menu' onClick={toggleMenu}>
        <div className={`menu-line menu-line1 ${displayMenu && 'open'}`}></div>
        <div className='menu-line menu-line2'></div>
        <div className='menu-line menu-line3'></div>
      </div>
      <div
        className='dropdown-menu'
        style={{ display: `${displayMenu ? 'block' : 'none'}` }}
      >
        {projects &&
          projects.map(
            project =>
              project.slug && (
                <a
                  onClick={toggleMenu}
                  key={project._id}
                  href={'#' + project.slug.current}
                >
                  <h2 className='project-title'>{project.title}</h2>
                </a>
              )
          )}
        <h2
          style={{ cursor: 'pointer' }}
          onClick={() => {
            toggleMenu()
            setViewContact(!viewContact)
          }}
        >
          Contact
        </h2>
      </div>
    </>
  )
}

export default Menu
