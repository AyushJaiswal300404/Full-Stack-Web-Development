import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from ".components/app.js";

const reactContentRoot = document.getElementById("root");
const root = ReactDOM.createRoot(reactContentRoot); 
root.render(<App />);

