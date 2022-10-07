import React from 'react';
import classes from './EnterButton.module.css';

const EnterButton = ({children, ...props}) => {
  return (
    <button {...props} className={classes.enterBtn}>
      {children}
    </button>
  );
};

export default EnterButton;