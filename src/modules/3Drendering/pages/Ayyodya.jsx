import { Canvas } from "@react-three/fiber";
import { Mandir } from "../components/Mandir";
import { AdaptiveDpr, OrbitControls, Preload } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import Lane from "../components/Lane";
import { Suspense } from "react";
import { Men } from "../../../shared/components/MenWalking";



export function Ayodhya() {
    
    return (
        <Suspense fallback={<span>loading...</span>}>
        <Canvas camera={{ position: [0, 25, 475] }} shadows style={{ width: "100vw", height: "100vh" }}>
        <AdaptiveDpr pixelated />
            <directionalLight intensity={2.5} position={[1, 10, 0]} />
            <ambientLight intensity={0.25} />
            <OrbitControls enableRotate={true}  />
             <gridHelper position={[0,0,3]} rotation={[Math.PI/2,Math.PI/2,0]} args={[100, 500, 0xff0000, 'teal']} />
             <gridHelper position={[2,0,78]} rotation={[Math.PI/2,Math.PI/2,0]} args={[30, 50, 0xff0000, 'teal']}  />
             <Men/>
            <Physics  >
                <Mandir />
                <Lane />
               
            </Physics>
           
         
        </Canvas>
        </Suspense>

    )
}