import Logo from '../assets/kasa-logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <img src={Logo} alt='Logo de Kasa' />
      </Link>
      <div>
        <Link to='/'>Accueil</Link>
        <Link to='/about'>À Propos</Link>
      </div>
    </header>
  )
}

export default Header
