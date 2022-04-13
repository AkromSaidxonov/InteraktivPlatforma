import React from "react";
import logo from "../Images/logo.svg";
import styles from "../Components/Navbar.module.css";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
        <div className="container">
          <div className={styles.navMainItem}>
            <Link to="/" className={styles.log}>
              <img className={styles.logoImg} src={logo} alt="logo" />
              <p className={styles.logoParagrapf}>
                Республика ихтисослаштирилган онкология ва радиология
                илмий-амалий тиббиёт маркази Тошкент вилояти филлиали
              </p>
            </Link>
            <div className={styles.callMain}>
              <a className={styles.call}href="tel:+998712031003">
                <FiPhoneCall className={styles.callIcon} />
                +998 (71) 203-1003
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
