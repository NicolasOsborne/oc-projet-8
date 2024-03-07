import { useState } from 'react'
import PropTypes from 'prop-types'

const Collapse = ({ title, content }) => {
  // Déclaration de la state variable isCollapsed, qui déterminera, en fonction de son state, si l'élément Collapse est caché (true) ou déroulé (false). Il est par défaut caché au chargement de la page.
  const [isCollapsed, setIsCollapsed] = useState(true)

  // Gestion du changement de state du component Collapse, en inversant le state de isCollapsed (true -> false et false -> true)
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className='collapse-menu'>
      <div className='collapse-menu-bar'>
        <h2 className='collapse-menu-title'>{title}</h2>
        <i
          className={`fa-solid fa-chevron-up collapse-menu-chevron ${
            isCollapsed ? '' : 'collapse-menu-chevron-dropdown'
          }`}
          onClick={toggleCollapse}
        />
      </div>
      <div
        className={`collapse-menu-content ${
          isCollapsed ? '' : 'collapse-menu-content-dropdown'
        }`}
      >
        {content}
      </div>
    </div>
  )
}

// Définition des PropTypes des props title et cover
Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
}

export default Collapse
