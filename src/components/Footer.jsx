import LogoFooter from '../assets/kasa-logo-footer.png'

const Footer = () => {
  return (
    <footer>
      <img className='footer-logo' src={LogoFooter} alt='Logo de Kasa' />
      <p>© 2024 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
