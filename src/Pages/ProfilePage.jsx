import React, { useState } from "react";

import styles from "./ProfilePage.module.css";

function ProfilePage() {
  //Notes
  //https://css-tricks.com/snippets/css/a-guide-to-flexbox/
  //Use flex for responsive design

  const [isActive, setIsActive] = useState(false);

  const userActive = isActive ? "check" : "times";

  return (
    <>
      <h5>Profile Page</h5>

      <div>
        <img
          className={styles.profilePicture}
          src="https://picsum.photos/200"
          alt=""
        />
        <div>
          <table className={styles.tableText}>
            <tr>
              <td>
                <i className={"far fa-user" + " " + styles.icons}></i> First
                name + Last name
              </td>
              <td>
                <i className={`fas fa-${userActive}` + " " + styles.icons} />
                Active Status
              </td>
            </tr>
            <tr>
              <td>
                <i className={"far fa-envelope" + " " + styles.icons}></i> email
                address
              </td>
              <td>
                <i className={"fas fa-car" + " " + styles.icons}></i> Car Model
                & Year{" "}
              </td>
            </tr>
            <tr>
              <td>
                <i className={"fas fa-mobile-alt" + " " + styles.icons}></i>
                Mobile Number
              </td>
              <td>
                <i className={"fas fa-hashtag" + " " + styles.icons}></i>
                Plate Number
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
