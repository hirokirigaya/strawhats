import styles from './Footer.module.css'
import { FaGithubAlt, FaLinkedin, FaFacebook, FaTwitter} from 'react-icons/fa'


function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <ul>
        <li><a href="https://github.com/hirokirigaya" target="_blank"><FaGithubAlt/></a></li>
        <li><a href="https://www.linkedin.com/in/daniel-junio-0832481bb/" target="_blank"><FaLinkedin/></a></li>
        <li><a href="#facebook"><FaFacebook/></a></li>
        <li><a href="#twtiter"><FaTwitter/></a></li>
      </ul>
      <p>Maked with &hearts; by <a href="http://github.com/hirokirigaya" target="_blank">Daniel</a></p>
    </footer>
  );
};

export default Footer;