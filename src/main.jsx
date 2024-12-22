import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { MetaMaskUIProvider } from '@metamask/sdk-react-ui'; // Importa el provider de MetaMask
import './index.css';

// Envolvemos la aplicación con MetaMaskUIProvider sin los metadatos
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MetaMaskUIProvider>
      <App />
    </MetaMaskUIProvider>
  </StrictMode>
);
