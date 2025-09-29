import React, { useState } from 'react';
import PortalComponent from './PortalComponent';

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
 <PortalComponent>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
        <div style={{ background: '#fff', padding: 20, borderRadius: 8, minWidth: 300 }}>
          <button onClick={onClose} style={{ float: 'right' }}>Close</button>
          {children}
        </div>
      </div>
     </PortalComponent>
  );
};

const PortalDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h2>React Portal Demo</h2>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <h3>This is rendered via a Portal!</h3>
        <p>Portals let you render children outside the parent DOM hierarchy.</p>
      </Modal>
    </div>
  );
};

export default PortalDemo;
