import React, { useEffect, useRef } from 'react'
import { useFrame, useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import * as THREE from 'three'

export function Men(props) {
  const group = useRef()
  const { scene, animations } = useGLTF('/3d/menWalking.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions, names } = useAnimations(animations, group)
  
  const walkingSpeed = 0.25 
  const positionRef = useRef(new THREE.Vector3(0, -2.8, 100))

  useEffect(() => {
    const action = actions[names[0]]
    action.reset().play()
    action.setLoop(THREE.LoopRepeat)
  }, [actions, names])

  useFrame(() => {
    if (group.current) {
      positionRef.current.z += walkingSpeed
      group.current.position.copy(positionRef.current)
    }
  })

  return (
    <group ref={group} {...props} dispose={null} scale={10}>
      <group name="Scene">
        <group name="AvatarRoot" rotation={[Math.PI / 2, 0, 0]}>
          <primitive object={nodes.Hips} />
          <skinnedMesh name="AvatarBody" geometry={nodes.AvatarBody.geometry} material={materials['AvatarBody.001']} skeleton={nodes.AvatarBody.skeleton} />
          <skinnedMesh name="AvatarLeftCornea" geometry={nodes.AvatarLeftCornea.geometry} material={materials['AvatarLeftCornea.001']} skeleton={nodes.AvatarLeftCornea.skeleton} />
          <skinnedMesh name="AvatarLeftEyeball" geometry={nodes.AvatarLeftEyeball.geometry} material={materials['AvatarLeftEyeball.001']} skeleton={nodes.AvatarLeftEyeball.skeleton} />
          <skinnedMesh name="AvatarRightCornea" geometry={nodes.AvatarRightCornea.geometry} material={materials['AvatarRightCornea.001']} skeleton={nodes.AvatarRightCornea.skeleton} />
          <skinnedMesh name="AvatarRightEyeball" geometry={nodes.AvatarRightEyeball.geometry} material={materials['AvatarRightEyeball.001']} skeleton={nodes.AvatarRightEyeball.skeleton} />
          <skinnedMesh name="AvatarTeethUpper" geometry={nodes.AvatarTeethUpper.geometry} material={materials['AvatarTeethUpper.001']} skeleton={nodes.AvatarTeethUpper.skeleton} />
          <skinnedMesh name="haircut" geometry={nodes.haircut.geometry} material={materials['haircut.001']} skeleton={nodes.haircut.skeleton} />
          <skinnedMesh name="outfit" geometry={nodes.outfit.geometry} material={materials['outfit.001']} skeleton={nodes.outfit.skeleton} />
          <skinnedMesh name="AvatarEyelashes" geometry={nodes.AvatarEyelashes.geometry} material={materials['AvatarEyelashes.001']} skeleton={nodes.AvatarEyelashes.skeleton} morphTargetDictionary={nodes.AvatarEyelashes.morphTargetDictionary} morphTargetInfluences={nodes.AvatarEyelashes.morphTargetInfluences} />
          <skinnedMesh name="AvatarHead" geometry={nodes.AvatarHead.geometry} material={materials['AvatarHead.001']} skeleton={nodes.AvatarHead.skeleton} morphTargetDictionary={nodes.AvatarHead.morphTargetDictionary} morphTargetInfluences={nodes.AvatarHead.morphTargetInfluences} />
          <skinnedMesh name="AvatarTeethLower" geometry={nodes.AvatarTeethLower.geometry} material={materials['AvatarTeethLower.001']} skeleton={nodes.AvatarTeethLower.skeleton} morphTargetDictionary={nodes.AvatarTeethLower.morphTargetDictionary} morphTargetInfluences={nodes.AvatarTeethLower.morphTargetInfluences} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/3d/menWalking.glb')