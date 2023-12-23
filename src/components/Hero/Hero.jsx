import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello World! <br></br>I'm Nishanki Singh</h1>
        <p className={styles.description}>
          a Full-Stack Developer crafting seamless experiences with code – from frontend elegance to backend robustness.
          <br></br>
          Reach out if you'd like to learn more!
          
        </p>
        {/* <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a> */}
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
