import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import linkedIn from "../../assets/linkedIn.svg";
import facebook from "../../assets/facebook.svg";
import logo from "../../assets/logo.png";
import styles from "./Footer.module.css";
import { Reveal } from "..";

const socials = [
  {
    icon: twitter,
    link: "",
  },
  {
    icon: instagram,
    link: "",
  },
  {
    icon: linkedIn,
    link: "",
  },
  {
    icon: facebook,
    link: "",
  },
];

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Reveal>
        <div className={styles.imageWrapper}>
          <img src={logo} alt="logo" width={64} height={64} />
        </div>
      </Reveal>

      <div className={styles.main}>
        <Reveal delay={0.35}>
          <p className={styles.text}>Follow Us</p>
        </Reveal>

        <div className={styles.socials}>
          {socials.map((social, index) => (
            <a href="#" className={styles.socialIcon} key={index}>
              <Reveal delay={0.35 + index * 0.1}>
                <img src={social.icon} alt="social" width={24} height={24} />
              </Reveal>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
