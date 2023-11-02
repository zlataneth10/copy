import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import OffCanvasExample from './components/offcanvas/Offcanvas'

function Example() {
  return (
    <>
      {['start', 'end', 'top', 'bottom'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <Example/>
  </>
);

