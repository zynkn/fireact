import React, { Fragment } from 'react';
import fireact from 'assets/svg/fireact21.svg';
import Google from 'assets/svg/Google.svg';
import Facebook from 'assets/svg/FacebookW.svg';
import LoginBtn from 'components/LoginPage/LoginBtn';


const HistoryPage = () => {
  return (
    <Fragment>
      <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#FF7043', padding: '32px 24px', height: '100vh' }}>
        <div>
          <img src={fireact} style={{ width: '82px' }} />
          <h2 style={{ marginTop: '32px', color: 'white', fontSize: '2.8em', fontWeight: '100' }}>Welcome to Fireact</h2>
          <div style={{ marginTop: '32px' }}>
            <LoginBtn title="Sign up with Google" img={Google} style={{ marginBottom: '24px' }} />
            <LoginBtn title="Sign up with Facebook" img={Facebook} style={{ background: '#3C5A99', color: 'white' }} />
          </div>
        </div>
        <span style={{ color: 'white', fontSize: '1.4em' }}>
          If you encounter any problem, please click <a href="#">Here</a>
        </span>
      </section>
    </Fragment>
  );
};

export default HistoryPage;