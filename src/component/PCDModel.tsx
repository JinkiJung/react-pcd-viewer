import { useLoader } from '@react-three/fiber';
import { Suspense } from 'react';
import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader';
import { Loader } from './Loader';

export interface PCDModelProp {
    fileName: string
}

export const PCDModel = ({fileName}: PCDModelProp) => {
    const data = useLoader(PCDLoader, fileName);
    return (
        <Suspense fallback={<Loader />}>
            <primitive object={data} />
        </Suspense>
    );
}