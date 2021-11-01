import * as React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  Canvas,
  extend,
  ReactThreeFiber,
  useFrame,
  useThree,
} from "@react-three/fiber";
import "tailwindcss/tailwind.css";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });
declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<
        OrbitControls,
        typeof OrbitControls
      >;
    }
  }
}
const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls

  const {
    camera,
    gl: { domElement },
  } = useThree();

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = React.useRef();
  useFrame((state) => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={false}
      maxAzimuthAngle={Math.PI / 4}
      maxPolarAngle={Math.PI}
      minAzimuthAngle={-Math.PI / 4}
      minPolarAngle={0}
    />
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-black w-full h-screen">
      <Canvas>
        <axesHelper />
        <CameraControls />
        <ambientLight />
        <pointLight position={[0, 0, 0]} />
        <perspectiveCamera aspect={1200 / 600} fov={45} position={[0, 0, 2]} />
        <Component {...pageProps} />
      </Canvas>
    </div>
  );
}

export default MyApp;
