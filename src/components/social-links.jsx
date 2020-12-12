import React from 'react';

import styles from './social-links.module.css';
import { FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const SocialLinks = () => (
  <>
    <div
      style={{
        fontSize: '1.5em',
      }}
    >
      <a className={styles.iconSpace}>
        <MdEmail />
      </a>
      <a href="https://twitter.com/m1ckey______" className={styles.iconSpace}>
        <FaTwitter />
      </a>
      <a href="https://github.com/m1ckey" className={styles.iconSpace}>
        <FaGithub />
      </a>
      <a
        href="https://www.instagram.com/m1ckey___/"
        className={styles.iconSpace}
      >
        <FaInstagram />
      </a>
    </div>
  </>
);

export default SocialLinks;
