import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

const DropDown = ({ shouldShow, children, ...props }) => (
  <CSSTransition
    {...props}
    classNames="dropdown"
    timeout={2000}
    in={shouldShow}
  >
    {children}
  </CSSTransition>
);
