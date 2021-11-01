import * as React from "react";
import { useFrame } from "@react-three/fiber";

interface INode {
  size: number[];
  coords: number[];
}

const Node: React.FC<INode> = ({ size, coords }) => {
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
    // ref.current.scale.x -= 0.1;
    // ref.current.rotation.x -= 0.1;
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
        <sphereGeometry args={size} />
        <meshStandardMaterial color={hovered ? "hotpink" : "pink"} />
      </mesh>
    </>
  );
};

export default Node;
