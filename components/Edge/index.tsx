import { useFrame } from "@react-three/fiber";
import * as React from "react";
import * as THREE from "three";
import { AppContext, AppContextProps } from "../../hooks/useApp";
interface IEdge {
  coords: [x: number, y: number, z: number];
  nextCoords: [x: number, y: number, z: number];
}
const Edge: React.FC<IEdge> = ({ coords, nextCoords }) => {
  const ref = React.useRef<any>();
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
  const { showEdges } = React.useContext<AppContextProps>(AppContext);

  // React.useEffect(() => {
  //   console.log("showEdges: ", showEdges);
  //   if (showEdges) {
  //     window.location.reload();
  //   }
  // }, [showEdges]);

  useFrame(() => {
    if (ref.current) {
      ref.current.visible = showEdges;
    }
  });

  return (
    <>
      <line>
        <bufferGeometry attach="geometry" onUpdate={onUpdate} />
        <lineBasicMaterial
          ref={ref}
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
