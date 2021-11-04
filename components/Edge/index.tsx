import * as React from "react";
import * as THREE from "three";
interface IEdge {
  coords: [x: number, y: number, z: number];
  nextCoords: [x: number, y: number, z: number];
}
const Edge: React.FC<IEdge> = ({ coords, nextCoords }) => {
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

  const curvedLine = new THREE.LineCurve3(
    new THREE.Vector3(coords[0], coords[1], coords[2]),
    new THREE.Vector3(nextCoords[0], nextCoords[1], nextCoords[2])
  );

  return (
    <>
      <line>
        <bufferGeometry attach="geometry" onUpdate={onUpdate} />
        <lineBasicMaterial
          attach="material"
          color={"#9c88ff"}
          linewidth={10}
          linecap={"round"}
          linejoin={"round"}
        />
      </line>
    </>
  );
};
export default Edge;
