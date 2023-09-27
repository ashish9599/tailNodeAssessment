import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { TodoProvider } from './todoContext';
import App from './App';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoProvider>


    <App />
<ToastContainer/>
    </TodoProvider>
  </React.StrictMode>
);

