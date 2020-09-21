import React from "react";

import "./SponsorsPage.css";

function SponsorsPage() {
  return (
    <>
      <h5>Proudly sponsored by</h5>
      <section className="section">
        <img src="./assets/images/logo/3w.png" alt="" />
        <p>
          3W Healthcare Solutions provides an extensive range of healthcare
          products such as walking aids, first aid kits, surgical equipments,
          dental accessories and first aid products along with a unique
          client/vendor management system for First Aid products.
        </p>
      </section>
      <section className="section">
        <img src="./assets/images/logo/alnaboodah1.png" alt="" />
        <p>
          Al Nabooda Automobiles is the exclusive authorised distributor in
          Dubai and Northern Emirates for Audi, Porsche, and Volkswagen.
        </p>
      </section>
    </>
  );
}

export default SponsorsPage;
