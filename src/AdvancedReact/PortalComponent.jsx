import React from 'react';

//Rendering children into a different part of the DOM using React Portal

import ReactDOM from 'react-dom';

const PortalComponent = ({ children }) => {
  const portalRoot = document.getElementById('portal-root');
  return portalRoot ? ReactDOM.createPortal(children, portalRoot) : null;
};

export default PortalComponent;
