import LogoFooter from '../assets/kasa-logo-footer.png'

const Footer = () => {
  return (
    <footer>
      <img className='footer-logo' src={LogoFooter} alt='Logo de Kasa' />
      <p>
        © 2024 Kasa. <br className='footer-break' />
        All rights reserved
      </p>
    </footer>
  )
}

export default Footer
