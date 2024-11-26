import { Rive } from '@rive-app/react';
import steps from '../assets/rive/steps.riv';

const StepsComponent = () => {
  return (
    <div style={{ width: '100%', height: 'auto' }}>
      <Rive
        src={steps}
        stateMachines="State Machine 1" // Reemplaza con el nombre de tu State Machine
        style={{ width: '100%', height: 'auto' }}
        fit="cover" // Ajusta al ancho completo
        align="center" // Centra la animación
        autoplay
      />
    </div>
  );
};

export default StepsComponent;
