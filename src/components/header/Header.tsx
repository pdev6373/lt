import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import { Reveal } from "..";
import { useEffect, useState } from "react";

type navType = {
  name: string;
  route: string;
};

type navsType = {
  left: navType[];
  right: navType[];
};

const navs: navsType = {
  left: [
    {
      name: "Home",
      route: "/#",
    },
    {
      name: "About",
      route: "/#about",
    },
    {
      name: "Products",
      route: "/#products",
    },
  ],

  right: [
    {
      name: "Features",
      route: "/#features",
    },
    {
      name: "Awards",
      route: "/#awards",
    },
    {
      name: "FAQ",
      route: "/#faq",
    },
  ],
};

export default function Header() {
  const [currentRoute, setCurrentRoute] = useState(window.location.hash || "");

  useEffect(() => {
    setCurrentRoute(window.location.hash);
    window.addEventListener("popstate", () => {
      setCurrentRoute(window.location.hash);
    });
  }, []);

  return (
    <header className={styles.wrapper}>
      <Reveal>
        <div className={styles.wrapperInner}>
          <nav className={styles.nav}>
            {navs.left.map((nav, index) => (
              <a
                key={index}
                href={nav.route}
                className={`${styles.navItem} ${
                  currentRoute === nav.route.slice(1) ||
                  (!index && currentRoute === "")
                    ? styles.navItemActive
                    : ""
                }`}
              >
                {nav.name}
              </a>
            ))}
          </nav>

          <img src={logo} alt="logo" className={styles.logo} />

          <nav className={styles.nav}>
            {navs.right.map((nav, index) => (
              <a
                key={index}
                href={nav.route}
                className={`${styles.navItem} ${
                  currentRoute === nav.route.slice(1)
                    ? styles.navItemActive
                    : ""
                }`}
              >
                {nav.name}
              </a>
            ))}
          </nav>
        </div>
      </Reveal>
    </header>
  );
}
