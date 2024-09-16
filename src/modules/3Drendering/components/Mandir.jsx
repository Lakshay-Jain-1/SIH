import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { useSelector } from 'react-redux';
import { useThree,useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Mandir() {
  const mandir = useGLTF("/3d/combined.glb");
  const threeSIXTYdegree = useSelector((state) => state.threeSixtyViewer.threeSixtyDegree);
  const cameramoving = useSelector((state) => state.cameraMovement.position);
  const objectRef = useRef();
  const { camera } = useThree();
  
  useEffect(() => {
    if (cameramoving && typeof cameramoving.x === 'number' && 
        typeof cameramoving.y === 'number' && 
        typeof cameramoving.z === 'number') {
      const cameraMovement = new THREE.Vector3(cameramoving.x, cameramoving.y, cameramoving.z);
      camera.position.copy(cameraMovement);
    }
  }, [cameramoving, camera]);

  useFrame(({ clock, camera }) => {
    
      
    if (threeSIXTYdegree) {
      const elapsedTime = clock.getElapsedTime();
      const radius = 190; 
      const angle = elapsedTime; 
      
      
      const x = Math.sin(angle) * radius;
      const z = Math.cos(angle) * radius;
      const y = 8; 

      
      camera.position.set(x, y, z);
      camera.lookAt(objectRef.current.position);
    }
  });

  return (
    <RigidBody scale={100} type='dynamic' position={[0, 9, 0]} colliders="hull" rotation={[0, Math.PI, 0]}>
      <primitive ref={objectRef} object={mandir.scene} />
    </RigidBody>
  );
}
