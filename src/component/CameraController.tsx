import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { Vector3 } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const CameraController = () => {
    const { camera, gl } = useThree();
    useEffect(
      () => {
        const controls = new OrbitControls(camera, gl.domElement);
        camera.rotation.setFromVector3(new Vector3(90,0,0));
        //camera.position.set(0,0,0);
        controls.minDistance = 2;
        controls.maxDistance = 200;
        return () => {
          controls.dispose();
        };
      },
      [camera, gl]
    );
    return null;
  };