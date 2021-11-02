import { useFrame } from "@react-three/fiber";
import * as React from "react";
import * as THREE from "three";
import styled from "styled-components";
interface IEdge {
  coords: [x: number, y: number, z: number];
  nextCoords: [x: number, y: number, z: number];
}
interface ILine extends React.SVGProps<SVGLineElement> {
  position: number[];
}
const Line = styled.line<ILine>``;

const Edge: React.FC<IEdge> = ({ coords, nextCoords }) => {
  const ref = React.useRef<any>();

  const [hovered, setHovered] = React.useState<boolean>(false);
  const [active, setActive] = React.useState<boolean>(false);
  const [edgeRef, object] = React.useState();

  const points = React.useMemo(
    () => [
      new THREE.Vector3(coords[0], coords[1], coords[2]),
      new THREE.Vector3(nextCoords[0], nextCoords[1], nextCoords[2]),
    ],
    [coords, nextCoords]
  );
  const onUpdate = React.useCallback(
    (self) => self.setFromPoints(points),
    [points]
  );

  return (
    <>
      {/* <mesh
        position={coords}
        ref={ref}
        scale={active ? 1.5 : 1}
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHovered(true)}
        onPointerOut={(e) => setHovered(false)}
      > */}
      {/* <cylinderGeometry /> */}
      <Line position={coords}>
        <bufferGeometry attach="geometry" onUpdate={onUpdate} />
        <lineBasicMaterial
          attach="material"
          color={"#9c88ff"}
          linewidth={10}
          linecap={"round"}
          linejoin={"round"}
        />
        {/* <lineBasicMaterial color={hovered ? "hotpink" : "darkOrange"} /> */}
      </Line>
      {/* </mesh> */}
    </>
  );
};
export default Edge;
