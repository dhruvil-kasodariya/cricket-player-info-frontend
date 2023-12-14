import "./footer.style.css";
import { FiInstagram, FiLinkedin, FiTwitter, FiGithub } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-contener">
      <footer className="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="social-icon">
          <li className="social-icon__item">
            <a
              className="social-icon__link"
              href="https://github.com/dhruvil-kasodariya"
            >
              <FiGithub />
            </a>
          </li>
          <li className="social-icon__item">
            <a
              className="social-icon__link"
              href="https://twitter.com/DhruvilKas69201?t=reEVPLRo-FMtXJGFVCIy6A&s=09
"
            >
              <FiTwitter />
            </a>
          </li>
          <li className="social-icon__item">
            <a
              className="social-icon__link"
              href="https://linkedin.com/in/dhruvil-kasodariya-968309213"
            >
              <FiLinkedin />
            </a>
          </li>
          <li className="social-icon__item">
            <a
              className="social-icon__link"
              href="https://instagram.com/iambunty_45?igshid=MzRlODBiNWFlZA=="
            >
              <FiInstagram />
            </a>
          </li>
          <li className="social-icon__item">
            <a
              className="social-icon__link"
              href="https://kasodariyadhruvil45@gmail.com"
            >
              <AiOutlineMail />
            </a>
          </li>
        </ul>

        <p>&copy;{currentYear} Dhruvil Kasodariya | Craete With Fun</p>
      </footer>
    </div>
  );
};

export default Footer;
