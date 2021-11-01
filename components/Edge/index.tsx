import { useFrame } from "@react-three/fiber";
import * as React from "react";

interface IEdge {
  coords: [x: number, y: number, z: number];
  rotationFactor?: number[];
  scaleFactor?: number;
}
const Edge: React.FC<IEdge> = ({ coords, scaleFactor, rotationFactor }) => {
  const ref = React.useRef<any>();

  const [hovered, setHovered] = React.useState<boolean>(false);
  const [active, setActive] = React.useState<boolean>(false);

  // React.useEffect(() => {
  //   if (ref.current) {
  //     ref.current.position = coords;
  //   }
  // }, []);
  useFrame((state, data) => {
    // console.log("state: ", state);
    // console.log("data: ", data);
    // console.log("ref.current: ", ref.current);
    // debugger;
    if (rotationFactor) {
      ref.current.rotation.x = rotationFactor[0];
      ref.current.rotation.y = rotationFactor[1];
      ref.current.rotation.z = rotationFactor[2];
    }
    ref.current.scale.x = 0.1;
    ref.current.scale.y = 0.1;
    ref.current.scale.z = 0.1;
    if (scaleFactor) {
      ref.current.scale.x = 0.1;
      ref.current.scale.y = 5;
      ref.current.scale.z = 0.1;
    }
  });

  return (
    <>
      <mesh
        position={coords}
        ref={ref}
        scale={active ? 1.5 : 1}
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHovered(true)}
        onPointerOut={(e) => setHovered(false)}
      >
        {/* <bufferGeometry position={rotationFactor} /> */}
        <cylinderGeometry />
        <meshStandardMaterial color={hovered ? "hotpink" : "darkOrange"} />
      </mesh>
    </>
  );
};
export default Edge;
