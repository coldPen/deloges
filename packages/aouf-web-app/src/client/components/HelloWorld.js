import React from 'react';
import logo from '../assets/logo-big.png';

const HelloWorld = () => (
  <div css={styles.hello}>
    <img src={logo} alt="Aouf" />
  </div>
);

export default HelloWorld;

const styles = {
  hello: {
    fontSize: 32,
    fontWeight: 'bold',
  },
};
