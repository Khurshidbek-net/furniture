import React from "react";
import styles from "./SectionCatalog.module.css";

function SectionCatalog() {
  return (
    <div className={styles.sectionCatalog}>
      <div className={styles.topSide}>
        <h2 className={styles.catalogTitle}>Каталог</h2>
        <button className={styles.button}>
          Весь каталог <img src="/arrowIcon.svg" alt="Arrow Icon" />
        </button>
      </div>
      <div className={styles.contentSide}>
        <div className={styles.cart}>
          <div className={styles.cartContent}>
            <h2>Люстры</h2>
            <div className={styles.cartDescription}>
              <p>От 540₽</p>
              <img src="/arrowIcon.svg" alt="" />
            </div>
          </div>
          <div>
            <img src="./catalog/cat1.png" alt="" />
          </div>
        </div>
        <div className={styles.cart}>
          <div className={styles.cartContent}>
            <h2>Светильники</h2>
            <div className={styles.cartDescription}>
              <p>От 540₽</p>
              <img src="/arrowIcon.svg" alt="" />
            </div>
          </div>
          <div>
            <img src="./catalog/cat2.png" alt="" />
          </div>
        </div>
        <div className={styles.cart}>
          <div className={styles.cartContent}>
            <h2>Бра</h2>
            <div className={styles.cartDescription}>
              <p>От 540₽</p>
              <img src="/arrowIcon.svg" alt="" />
            </div>
          </div>
          <div>
            <img style={{width: "250px"}} src="./catalog/cat3.png" alt="" />
          </div>
        </div>
        <div className={styles.cart}>
          <div className={styles.cartContent}>
            <h2>Торшеры</h2>
            <div className={styles.cartDescription}>
              <p>От 540₽</p>
              <img src="/arrowIcon.svg" alt="" />
            </div>
          </div>
          <div>
            <img src="./catalog/cat4.png" alt="" />
          </div>
        </div>
        <div className={styles.cart}>
          <div className={styles.cartContent}>
            <h2>Настольные лампы</h2>
            <div className={styles.cartDescription}>
              <p>От 540₽</p>
              <img src="/arrowIcon.svg" alt="" />
            </div>
          </div>
          <div>
            <img src="./catalog/cat5.png" alt="" />
          </div>
        </div>
        <div className={styles.cart}>
          <div className={styles.cartContent}>
            <h2>Споты</h2>
            <div className={styles.cartDescription}>
              <p>От 540₽</p>
              <img src="/arrowIcon.svg" alt="" />
            </div>
          </div>
          <div>
            <img src="./catalog/cat6.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionCatalog;
