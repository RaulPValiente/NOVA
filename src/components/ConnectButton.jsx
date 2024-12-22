import { useState } from 'react';  
import Rive from '@rive-app/react-canvas';
import connect from '../assets/rive/connect.riv';
import connectedImage from '../assets/connected.png';  // Asegúrate de tener esta imagen en la ruta correcta

const ConnectButton = ({ isConnected, onClick, isMobile }) => {
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnectWallet = async () => {
    if (isConnecting || isConnected) return;

    try {
      setIsConnecting(true);

      // Verifica si MetaMask está disponible
      if (window.ethereum && window.ethereum.isMetaMask) {
        // Solicita la conexión a MetaMask
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Cambia el estado de conexión si es necesario
        if (onClick) onClick(); // Esto debe actualizar el estado `isConnected` en Navbar
      } else {
        alert("No se detectó MetaMask.");
      }
    } catch (error) {
      console.error("Error al conectar MetaMask:", error);
      alert('Hubo un error al intentar conectar con MetaMask.');
    } finally {
      setIsConnecting(false);  // Permite clics nuevamente una vez terminada la conexión
    }
  };

  return (
    <div
      className={`relative w-[151px] h-[50px] ${isMobile ? 'mb-4' : 'mb-0'}`}
      style={{ cursor: 'pointer' }}
      onClick={handleConnectWallet}
      disabled={isConnecting}
    >
      {/* Mostrar el Rive si no está conectado */}
      {!isConnected ? (
        <div>
          <Rive
            src={connect}
            className="absolute inset-0 w-full h-full rounded-[100px]"
          />
        </div>
      ) : (
        // Si está conectado, mostrar la imagen "Connected"
        <img
          src={connectedImage}
          alt="Connected"
          className="w-full h-full object-contain rounded-[100px]"
        />
      )}
    </div>
  );
};

export default ConnectButton;
