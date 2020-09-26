import React from "react";

import styles from "./AboutPage.module.css";

function AboutPage() {
  return (
    <>
      <section className={`${styles.section} ${styles.sectionOne}`}>
        <img src="./assets/images/DubDriveDVUGroupPhoto.jpg" alt="" />
        <h5>IT STARTED WITH A VISION</h5>
        <p>
          Der Volkskreis UAE translates to "The People's Circle" from German.
          That is exactly who we are.
        </p>
        <p>
          Founded in 2019, we are the leading Volkswagen enthusiast club in the
          UAE.
        </p>
        <p>
          We like to think of ourselves as a different kind of car enthusiast
          club.
        </p>
      </section>
      <section className={`${styles.section} ${styles.sectionTwo}`}>
        <h5>A to B</h5>
        <p>
          With over 200 active members, we are always holding events where
          people in the #Circle can experience their cars.
        </p>
        <p>
          To us, we do not care about the destination but the journey in
          between.
        </p>
        <p>
          Because it is only during the drive is where the memories are built.
        </p>
        <img src="./assets/images/3w_dubdrive.jpeg" alt="" />
      </section>
      <section className={`${styles.section} ${styles.sectionThree}`}>
        <img src="./assets/images/circle.jpeg" alt="" />
        <h5>THE #CIRCLE</h5>
        <p>And that is why we call ourselves the #Circle.</p>
        <p>It is an endless loop of excitement, adrenaline rush, & passion.</p>
        <p>We are the #Circle</p>
      </section>
    </>
  );
}

export default AboutPage;
