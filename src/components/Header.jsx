import Logo from '../assets/kasa-logo.png'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <img src={Logo} alt='Logo de Kasa' />
      </Link>
      <div>
        <NavLink to='/'>Accueil</NavLink>
        <NavLink to='/about'>À Propos</NavLink>
      </div>
    </header>
  )
}

export default Header
