import './footer.css';
import {BsFacebook, BsGithub, BsLinkedin} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
    <a href="#/" className='footer_logo'>Alexander</a>
    <div className="footer_socials">
        <a href="https://linkedin.com" target="blank"> <BsLinkedin /> </a>
        <a href="https://github.com/AlexTeklu/reactapp-radio-api" target="blank"> <BsGithub /> </a>
        <a href="https://facebook.com" target="blank"> <BsFacebook /> </a>
    </div>
 
    <div className="footer_copyright">
      <small>&copy; Alexander Teklu. all rights reserved</small>
    </div>
    
    </footer>
  )
}

export default Footer;