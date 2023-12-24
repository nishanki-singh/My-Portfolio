import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact Me</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/mobile.png")} alt="Phone" />
          <a href=" " > +91-9548695149 </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:nishanki24.singh@gmail.com" target="_blank" >nishanki24.singh@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="http://www.linkedin.com/in/nishanki-singh" target="_blank" >www.linkedin.com/in/nishanki-singh</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/nishanki-singh" target="_blank" >github.com/nishanki-singh</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/location.png")} alt="Github icon" />
          <a href=" "> Kashipur, Uttrakhand</a>
        </li>
      </ul>
    </footer>
  );
};
