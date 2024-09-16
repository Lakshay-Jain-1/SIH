import { RigidBody } from "@react-three/rapier";


export default function Lane(){
    
  
   
    return(
        <RigidBody type="fixed" position={[0,-10,6.7]} rotation={[Math.PI/2,0,0]}>
          <mesh  >
            <boxGeometry args={[600,1300,0.3]}  />
            <meshBasicMaterial color="#964B00" />
          </mesh>
        </RigidBody>
    )
}