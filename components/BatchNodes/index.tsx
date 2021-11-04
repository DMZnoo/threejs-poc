import * as React from "react";
import * as THREE from "three";
import niceColors from "nice-color-palettes";
import { useFrame } from "@react-three/fiber";
import Edge from "../Edge";
import { AppContext, AppContextProps } from "../../hooks/useApp";

interface IBatchNodes {
  nodeConfig: number[];
  size: number;
}
const tempObject = new THREE.Object3D();

const BatchNodes: React.FC<IBatchNodes> = ({ nodeConfig, size }) => {
  const ref = React.useRef<any>();
  const [hovered, setHovered] = React.useState<boolean>(false);
  const [active, setActive] = React.useState<boolean>(false);
  const [edges, setEdges] = React.useState<React.ReactElement[]>();
  const { goCrazy, nodeCount } = React.useContext<AppContextProps>(AppContext);

  const setNodePositionAndEdges = () => {
    const edgesArr = [];

    let x1 = 0,
      y1 = 0,
      z1 = 0;
    for (let i = 0; i < size; i++) {
      const x = Math.random() * 10 - 5,
        y = Math.random() * 10 - 5,
        z = Math.random() * 10 - 5;
      tempObject.position.set(x, y, z);
      tempObject.updateMatrix();
      ref.current.setMatrixAt(i, tempObject.matrix);

      if (i % 2 !== 0) {
        edgesArr.push(
          <Edge
            key={"edge-" + i}
            coords={[x, y, z]}
            nextCoords={[x1, y1, z1]}
          />
        );
      }
      x1 = x;
      y1 = y;
      z1 = z;
    }
    setEdges(edgesArr);
    ref.current.instanceMatrix.needsUpdate = true;
  };

  React.useEffect(() => {
    setNodePositionAndEdges();
  }, [nodeCount]);

  useFrame(() => {
    goCrazy && setNodePositionAndEdges();
  });

  return (
    <>
      <instancedMesh
        ref={ref}
        args={[undefined, undefined, size]}
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHovered(true)}
        onPointerOut={(e) => setHovered(false)}
      >
        <sphereGeometry
          attach="geometry"
          args={[nodeConfig[0], nodeConfig[1], nodeConfig[2]]}
        >
          {/* <instancedBufferAttribute
            attachObject={["attributes", "color"]}
            args={[colorArray, 3]}
          /> */}
        </sphereGeometry>
        <meshStandardMaterial color={"darkBlue"} />
      </instancedMesh>
      {edges}
    </>
  );
};

export default BatchNodes;
