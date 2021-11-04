import * as React from "react";
import * as THREE from "three";

interface INode {
  size: number[];
  coords: number[];
  color?: string;
}

const Node: React.FC<INode> = ({ size, coords, color = "pink" }) => {
  const ref = React.useRef<any>();
  const [hovered, setHovered] = React.useState<boolean>(false);
  const [active, setActive] = React.useState<boolean>(false);

  return (
    <>
      <mesh
        position={[coords[0], coords[1], coords[2]]}
        ref={ref}
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHovered(true)}
        onPointerOut={(e) => setHovered(false)}
      >
        <sphereGeometry attach="geometry" args={[size[0], size[1], size[2]]} />
        <meshStandardMaterial color={hovered ? "hotpink" : color} />
      </mesh>
    </>
  );
};

export default Node;
