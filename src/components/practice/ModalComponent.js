import React, { useState } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");
export default function ModalComponent() {
  const [modalIsOpen, setModelIsOpen] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setModelIsOpen(true)}>Open modal</button>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModelIsOpen(false)}
        style={{
           
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.75)'
            },
            content: {
              position: 'absolute',
              top: '40px',
              left: '40px',
              right: '40px',
              bottom: '40px',
              border: '1px solid #ccc',
              background: '#fff',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              padding: '20px'
            }
          }}
      >
        <h1>Register</h1>
        <p>sfdsfds</p>
        <input type="text" placeholder="enter username"></input>
        <button onClick={() => setModelIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}
