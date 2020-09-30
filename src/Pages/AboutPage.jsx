import React from "react";

import styles from "./AboutPage.module.css";

function AboutPage() {
  return (
    <>
      <div className={styles.container}>
        <section className={`${styles.section} ${styles.sectionOne}`}>
          <h5 className={styles.sectionHeading}>IT STARTED WITH A VISION</h5>
          <img
            className={styles.sectionImage}
            src="./assets/images/DubDriveDVUGroupPhoto.jpg"
            alt=""
          />

          <p className={styles.sectionBody}>
            Der Volkskreis UAE translates to "The People's Circle" from German.
            That is exactly who we are.
          </p>
          <p className={styles.sectionBody}>
            Founded in 2019, we are the leading Volkswagen enthusiast club in
            the UAE.
          </p>
          <p className={styles.sectionBody}>
            We like to think of ourselves as a different kind of car enthusiast
            club.
          </p>
        </section>
        <section className={`${styles.section} ${styles.sectionTwo}`}>
          <h5 className={styles.sectionHeading}>A to B</h5>
          <img
            className={styles.sectionImage}
            src="./assets/images/3w_dubdrive.jpeg"
            alt=""
          />

          <p className={styles.sectionBody}>
            With over 200 active members, we are always holding events where
            people in the #Circle can experience their cars.
          </p>
          <p className={styles.sectionBody}>
            To us, we do not care about the destination but the journey in
            between.
          </p>
          <p className={styles.sectionBody}>
            Because it is only during the drive is where the memories are built.
          </p>
        </section>
        <section className={`${styles.section} ${styles.sectionThree}`}>
          <h5 className={styles.sectionHeading}>THE #CIRCLE</h5>
          <img
            className={styles.sectionImage}
            src="./assets/images/circle.jpeg"
            alt=""
          />

          <p className={styles.sectionBody}>
            And that is why we call ourselves the #Circle.
          </p>
          <p className={styles.sectionBody}>
            It is an endless loop of excitement, adrenaline rush, & passion.
          </p>
          <p className={styles.sectionBody}>We are the #Circle</p>
        </section>
      </div>
    </>
  );
}

export default AboutPage;
