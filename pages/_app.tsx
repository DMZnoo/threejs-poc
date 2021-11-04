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
import { FirstPersonControls } from "@react-three/drei";

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls

  const {
    camera,
    gl: { domElement },
  } = useThree();

  // Ref to the controls, so that we can update them on every frame using useFrame
  return (
    // <flyControls
    //   args={[camera, domElement]}
    //   movementSpeed={1000}
    //   rollSpeed={Math.PI / 24}
    //   dragToLook={false}
    //   autoForward={false}

    //   // enableZoom={false}
    //   // maxAzimuthAngle={Math.PI / 4}
    //   // maxPolarAngle={Math.PI}
    //   // minAzimuthAngle={-Math.PI / 4}
    //   // minPolarAngle={0}
    // />
    <FirstPersonControls
      activeLook={true}
      autoForward={false}
      constrainVertical={false}
      enabled={true}
      heightCoef={1}
      heightMax={1}
      heightMin={0}
      heightSpeed={false}
      lookVertical={true}
      lookSpeed={0.1}
      movementSpeed={1}
      verticalMax={Math.PI}
      verticalMin={0}
    />
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <div className="bg-black w-full h-screen">
    <div className="h-screen bg-white">
      <Canvas>
        <axesHelper />
        <ambientLight />
        <pointLight position={[0, 0, 0]} />
        <perspectiveCamera aspect={1200 / 600} fov={45} position={[0, 0, 2]} />
        <Component {...pageProps} />
        <CameraControls />
      </Canvas>
    </div>
    // </div>
  );
}

export default MyApp;
