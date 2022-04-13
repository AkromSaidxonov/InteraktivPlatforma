import React from "react";
import { Link } from "react-router-dom";
import styles from "./MainPages.module.css";
import "./style.css";

function MainPages() {
  return (
    <>
      <div className="container">
        <div className={styles.header}>
          <p>
            Ахборот технологияларини ривожлантириш маркази интерактив хизматлар
            платформасига хуш келибсиз!
          </p>
        </div>
        <div className={styles.itemParent}>
          <Link to="/Axborot" className={styles.child}>
            <div className={styles.mainItems}></div>
            <p>Ахборот технологиялари марказига электрон мурожаат</p>
          </Link>

          <Link to="/Dorixona" className={styles.child}>
            <div className={styles.mainItems}></div>
            <p>Мавжуд дори воситалари бўйича маьлумот</p>
          </Link>
          <Link to="/Darslik" className={styles.child}>
            <div className={styles.mainItems}></div>
            <p>Электрон қўлланма ва ўқув йўриқномалар</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MainPages;
