import React from "react";

import style from "./SponsorsPage.module.css";

function SponsorsPage() {
  return (
    <>
      <div className={style.container}>
        <h5 className={style.pageTitle}>Proudly sponsored by</h5>
        <section className={style.section}>
          <img
            className={style.sponsorLogo}
            src="./assets/images/logo/3w.png"
            alt=""
          />
          <p className={style.sponsorDescription}>
            3W Healthcare Solutions provides an extensive range of healthcare
            products such as walking aids, first aid kits, surgical equipments,
            dental accessories and first aid products along with a unique
            client/vendor management system for First Aid products.
          </p>
        </section>
        <section className={style.section}>
          <img
            className={style.sponsorLogo}
            src="./assets/images/logo/alnaboodah1.png"
            alt=""
          />
          <p className={style.sponsorDescription}>
            Al Nabooda Automobiles is the exclusive authorised distributor in
            Dubai and Northern Emirates for Audi, Porsche, and Volkswagen.
          </p>
        </section>
      </div>
    </>
  );
}

export default SponsorsPage;
