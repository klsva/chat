import React from 'react';
import classes from './ExitButton.module.css';

function ExitButton({children, ...props}) {
    return (
      <button {...props} className={classes.exitBtn}>
        {children}
      </button>
    );
};


export default ExitButton;
