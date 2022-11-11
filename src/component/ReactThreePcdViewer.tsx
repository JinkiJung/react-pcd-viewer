import { PCDModel } from './PCDModel';
import { CameraController } from './CameraController';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

export interface Vec3 {
    x: number;
    y: number;
    z: number;
}

export interface ReactThreePcdViewerProp {
    url: string;
    backgroundColor?: string;
    angle?: number;
    near?: number;
    far?: number;
    pointSize?: number;
    cameraPosition?: Vec3;
    controlsPosition?: Vec3;
}

export const ReactThreePcdViewer = ({url, backgroundColor = 'rgb(35, 35, 35)', angle=0, near = 1, far = 2000, pointSize=0.2, cameraPosition = {x:30, y:30, z:30}, controlsPosition}: ReactThreePcdViewerProp) => {
    return (
        <div className="fullscreen" style={{backgroundColor}}>
            <Canvas>
                <CameraController position={new THREE.Vector3(cameraPosition.x, cameraPosition.y, cameraPosition.z)}/>
                <ambientLight intensity={0.1} />
                <directionalLight color="red" position={[0, 0, 5]} />
                <primitive object={new THREE.AxesHelper(10)} />
                <PCDModel fileName={url} pointSize={pointSize} initialRotation={new THREE.Euler(-Math.PI/2, 0, 0)} initialPosition={new THREE.Vector3(0,0,0)}></PCDModel>
            </Canvas>
        </div>
    );
}