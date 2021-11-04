import * as React from "react";
import * as THREE from "three";
import niceColors from "nice-color-palettes";
import { useFrame } from "@react-three/fiber";

interface IBatchNodes {
  nodeConfig: number[];
  size: number;
}
const tempObject = new THREE.Object3D();

const BatchNodes: React.FC<IBatchNodes> = ({ nodeConfig, size }) => {
  const ref = React.useRef<any>();
  const [hovered, setHovered] = React.useState<boolean>(false);
  const [active, setActive] = React.useState<boolean>(false);

  React.useEffect(() => {
    for (let i = 0; i < size; i++) {
      const x = Math.random() * 10 - 5,
        y = Math.random() * 10 - 5,
        z = Math.random() * 10 - 5;
      tempObject.position.set(x, y, z);
      tempObject.updateMatrix();
      ref.current.setMatrixAt(i, tempObject.matrix);
    }
    ref.current.instanceMatrix.needsUpdate = true;
  }, []);

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
    </>
  );
};

export default BatchNodes;
