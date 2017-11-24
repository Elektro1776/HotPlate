import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

const FoldOut = ({ shouldShow, children, ...props }) => (
  <CSSTransition
    {...props}
    classNames="foldout"
    // timeout={0}
    in={shouldShow}
  >
    {children}
  </CSSTransition>
);


export default FoldOut;
