import React from 'react';

import styles from './social-links.module.css';
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const rotCount = 8;
const ciphertext = 'u9ksm#Hu9ksm#6vm|';

class SocialLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rotCount: rotCount,
      email: ciphertext,
    };
  }

  handleDecodeEmail = () => {
    if (this.state.rotCount > 0) {
      this.setState(state => ({
        rotCount: state.rotCount - 1,
        email: rot(state.email),
      }));
      setTimeout(this.handleDecodeEmail, Math.random() * 200 + 100); // hacker flair
    }
  };

  render() {
    return (
      <>
        <div
          style={{
            fontSize: '1.5em',
          }}
        >
          <a
            href="https://twitter.com/m1ckey______"
            className={styles.iconSpace}
          >
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
        <div style={{ fontSize: '1.25em', marginTop: '0.6em' }}>
          {this.state.rotCount > 0 ? (
            <span
              onClick={this.handleDecodeEmail}
              className={styles.iconSpace}
              style={{ cursor: 'pointer' }}
            >
              <MdEmail />
              &nbsp;
              <span style={{ fontSize: '0.8em' }}>
                {this.state.rotCount === rotCount
                  ? 'SHOW EMAIL'
                  : this.state.email}
              </span>
            </span>
          ) : (
            <a
              href={'mailto:' + this.state.email}
              className={styles.iconSpace}
              style={{ color: 'var(--textHeader)', textDecoration: 'none' }}
            >
              <MdEmail />
              &nbsp;
              <span style={{ fontSize: '0.8em' }}>{this.state.email}</span>
            </a>
          )}
        </div>
      </>
    );
  }
}

function rot(text) {
  const map =
    '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';

  let cleartext = '';
  let i,
    j,
    c,
    len = map.length;
  for (i = 0; i < text.length; i++) {
    c = text.charAt(i);
    j = map.indexOf(c);
    if (j >= 0) {
      c = map.charAt((j + len - 1) % len);
    }
    cleartext = cleartext + c;
  }
  return cleartext;
}

export default SocialLinks;
