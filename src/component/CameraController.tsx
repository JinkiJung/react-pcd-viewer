import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { Vector3 } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export interface CameraControllerProp {
  position: THREE.Vector3;
}
export const CameraController = ({position}: CameraControllerProp) => {
    const { camera, gl } = useThree();
    useEffect(
      () => {
        const controls = new OrbitControls(camera, gl.domElement);
        controls.listenToKeyEvents( window );
        //controls.keys = { LEFT: 'KeyA', UP: 'KeyW', RIGHT: 'KeyD', BOTTOM: 'KeyS' };
        //camera.rotation.setFromVector3(new Vector3(45,45,0));
        camera.position.set(position.x, position.y, position.z);
        camera.lookAt(0,0,0);
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
/*
  const Camera = (props) => {
    const ref = useRef();
    const set = useThree((state) => state.set);
    useEffect(() => void set({ camera: ref.current }), []);
    useFrame(() => ref.current.updateMatrixWorld());
    return <perspectiveCamera ref={ref} {...props} />;
  };
  */