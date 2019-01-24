import React from 'react';

const HelloWorld = () => <div css={styles.hello}>Hello world</div>;

export default HelloWorld;

const styles = {
  hello: {
    fontSize: 32,
    fontWeight: 'bold',
  },
};
