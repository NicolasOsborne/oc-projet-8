import { useState } from 'react'
import PropTypes from 'prop-types'

const Collapse = ({ title, content }) => {
  const [isCollapsed, setIsCollapsed] = useState(true)
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

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
}

export default Collapse
