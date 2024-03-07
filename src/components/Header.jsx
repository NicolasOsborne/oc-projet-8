import Logo from '../assets/kasa-logo.png'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <img className='header-logo' src={Logo} alt='Logo de Kasa' />
      </Link>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? 'nav-active' : '')}
          to='/'
        >
          Accueil
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'nav-active' : '')}
          to='/about'
        >
          À Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
