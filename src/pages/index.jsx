import React from 'react';

import SEO from '../components/seo';
import ParticlesBackground from '../components/particles-background';
import SocialLinks from '../components/social-links';

const IndexPage = () => {
  return (
    <>
      <SEO fullpage={true} />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            minWidth: '80%',
            padding: '0 5% 40vh 5%',
          }}
        >
          <h1 style={{ marginBottom: 0 }}>Michael Krickl</h1>
          <h4 style={{ marginTop: 0 }}>m1ckey</h4>
          <div
            style={{
              display: 'flex',
              flexFlow: 'column',
            }}
          >
            <SocialLinks />
          </div>
        </div>
      </div>

      <ParticlesBackground />
    </>
  );
};

export default IndexPage;
