import { useLoader } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader';
import { Loader } from './Loader';
import * as THREE from 'three';
import { Points } from '@react-three/drei';
import { PointsMaterial } from 'three';

export interface PCDModelProp {
    fileName: string;
    pointSize: number;
    initialRotation: THREE.Euler;
    initialPosition: THREE.Vector3;
}

export const PCDModel = ({fileName, pointSize, initialRotation, initialPosition}: PCDModelProp) => {
    const data: THREE.Points = useLoader(PCDLoader, fileName);
    const [_pointSize, set_pointSize] = useState(pointSize);

    return (
        <Suspense fallback={<Loader />}>
            <primitive
                rotation={initialRotation}
                position={initialPosition}
                object={data ? new THREE.Points(data.geometry, new PointsMaterial({size: _pointSize})) : undefined}
            />
        </Suspense>
    );
}