import React from "react";

import styles from "./MediaPage.module.css";

function MediaPage() {
  return (
    <>
      <div className={styles.container}>
        <section className={`${styles.section} ${styles.sectionOne}`}>
          <h5 className={styles.sectionHeading}>THE #CIRCLE</h5>
          <div className={styles.videoContainer}>
            <iframe
              src="https://www.youtube.com/embed/OCrEHIoY0-c"
              frameborder="0"
              height="100%"
              width="100%"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <p className={styles.sectionBody}>
            This video was filmed, edited and published in 1.5 months after the
            idea was formed. We wanted to show the world what the #Circle is all
            about and what better way than to make a short movie?
          </p>
          <p className={styles.sectionFooter}>
            Director/Editor/Filmer: Omar El Kattouri
          </p>
        </section>
        <section className={`${styles.section} ${styles.sectionTwo}`}>
          <h5 className={styles.sectionHeading}>
            3W HEALTHCARE SOLUTIONS SAFETY EVENT
          </h5>
          <div className={styles.videoContainer}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/5IcDPwEV7mg"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <p className={styles.sectionBody}>
            One of our earliest events was the Safety event held at the Ajman
            Museum under the sponsorship of 3W Healthcare solutions. During this
            event, 3W has provided a presentation on basic first aid and how to
            deal with common injuries and medical situations. Because we are a
            motorsport club, we believe it is important to educate our members
            on basic safety on the road.
          </p>
          <p className={styles.sectionFooter}>
            Director/Editor/Filmer: Omar El Kattouri
          </p>
        </section>
        <section className={`${styles.section}${styles.sectionThree}`}>
          <h5 className={styles.sectionHeading}>ALNABOODA AUTOMOBILES EVENT</h5>
          <div className={styles.videoContainer}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/XN7cREQ7bo0"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <p className={styles.sectionBody}>
            During 2019, we have secured a sponsorship deal with Al Nabooda
            Volkswagen and they have become our Brand Sponsor. To celebrate the
            occasion, we held an event at their brand new Bodyshop located in
            Dubai Industrial City. The day was filled with offroading experience
            in the new Touareg as well as a 0-100kmh time attack!
          </p>
          <p className={styles.sectionFooter}>Director/Editor/Filmer:</p>
        </section>
      </div>
    </>
  );
}

export default MediaPage;
