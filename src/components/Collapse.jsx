import { useState } from 'react'

const Collapse = () => {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className='collapse-menu'>
      <div className='collapse-menu-bar'>
        <h2 className='collapse-menu-title'>Fiabilité</h2>
        <i
          className={`fa-solid fa-chevron-up collapse-menu-chevron ${
            isCollapsed ? '' : 'collapse-menu-chevron-dropdown'
          }`}
          onClick={handleCollapse}
        />
      </div>
      <div
        className={`collapse-menu-content ${
          isCollapsed ? '' : 'collapse-menu-content-dropdown'
        }`}
      >
        <p>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </p>
      </div>
    </div>
  )
}

export default Collapse
