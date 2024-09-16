import React from 'react';
import { useDispatch } from 'react-redux';
import { movingCamera } from '../../features/CameraMovement';

const ControllerLayout = () => {
  const dispatch = useDispatch();
  
  const controllerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 50px)',
    gridTemplateRows: 'repeat(3, 50px) 70px',
    gap: '5px',
    position: "absolute",
    top: "50vh",
    right: "50px",
    zIndex: 1
  };

  const buttonStyle = {
    backgroundColor: '#8a7ba0',
    border: '2px solid #ffffff',
    cursor: 'pointer'
  };

  const upStyle = { ...buttonStyle, gridColumn: '2', gridRow: '1' };
  const leftStyle = { ...buttonStyle, gridColumn: '1', gridRow: '2' };
  const rightStyle = { ...buttonStyle, gridColumn: '3', gridRow: '2' };
  const downStyle = { ...buttonStyle, gridColumn: '2', gridRow: '3' };

  return (
    <div style={controllerStyle}>
      <div style={upStyle} onClick={() => dispatch(movingCamera({x: 0, y: 2, z: -40}))}></div>
      <div style={leftStyle} onClick={() => dispatch(movingCamera({x: -2, y: 0, z: 0}))}></div>
      <div style={rightStyle} onClick={() => dispatch(movingCamera({x: 2, y: 0, z: 0}))}></div>
      <div style={downStyle} onClick={() => dispatch(movingCamera({x: 0, y: -2, z: 40}))}></div>
    </div>
  );
};

export default ControllerLayout;