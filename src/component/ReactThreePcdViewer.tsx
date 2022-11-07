import { PCDModel } from './PCDModel';
import { CameraController } from './CameraController';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

export interface ReactThreePcdViewerProp {
    url: string;
    backgroundColor?: string;
    angle?: number;
    near?: number;
    far?: number;
    cameraPosition?: object;
    controlsPosition?: object;
}

export const ReactThreePcdViewer = ({url, backgroundColor = 'black', angle=0, near = 1, far = 2000, cameraPosition = {}, controlsPosition = {}}: ReactThreePcdViewerProp) => {
    return (
        <div className="fullscreen">
            <Canvas>
                <CameraController />
                <ambientLight intensity={0.1} />
                <directionalLight color="red" position={[0, 0, 5]} />
                <primitive rotation={new THREE.Euler(Math.PI / 2, 0, 0)} object={new THREE.AxesHelper(10)} />
                <PCDModel fileName={url}></PCDModel>
            </Canvas>
        </div>
    );
}