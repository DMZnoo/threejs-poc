import { FirstPersonControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import type { NextPage } from "next";
import * as React from "react";
import BatchNodes from "../components/BatchNodes";
import Edge from "../components/Edge";
import Node from "../components/Node";
import useApp, { AppContext, AppContextProps } from "../hooks/useApp";

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

const Home: NextPage = () => {
  const context = useApp();
  const { showEdges, toggleEdges, goCrazy, toggleGoCrazy } = context;
  // const [edges, setEdges] = React.useState<any[]>();
  // const [nodes, setNodes] = React.useState<any[]>();

  // React.useEffect(() => {
  //   const nodesArr = [];
  //   const edgesArr = [];
  //   const maxNodes = 30;

  //   for (let i = 0; i < maxNodes; i += 2) {
  //     const x = Math.random() * 10 - 5,
  //       y = Math.random() * 10 - 5,
  //       z = Math.random() * 10 - 5;

  //     const x1 = Math.random() * 10 - 5;
  //     const y1 = Math.random() * 10 - 5;
  //     const z1 = Math.random() * 10 - 5;

  //     nodesArr.push(
  //       <Node
  //         key={"node-" + i}
  //         size={[0.1, 100, 100]}
  //         coords={[x, y, z]}
  //         color="red"
  //       />
  //     );

  //     edgesArr.push(
  //       <Edge key={"edge-" + i} coords={[x, y, z]} nextCoords={[x1, y1, z1]} />
  //     );

  //     nodesArr.push(
  //       <Node
  //         key={"node-1-" + i}
  //         size={[0.1, 100, 100]}
  //         coords={[x1, y1, z1]}
  //         color="green"
  //       />
  //     );
  //   }

  //   setEdges(edgesArr);
  //   setNodes(nodesArr);
  // }, []);

  return (
    <div className="h-screen bg-white">
      {/* <Node size={[1, 100, 100]} coords={[0, 0, 0]} /> */}
      {/* <Node size={[1, 100, 100]} coords={[5, 0, 0]} /> */}
      <button className="bg-blue-400 w-20" onClick={() => toggleEdges()}>
        {showEdges ? "Hide" : "Show"} Edges
      </button>
      <button className="bg-blue-400 w-20" onClick={() => toggleGoCrazy()}>
        {goCrazy ? "That was Enough" : "Go Crazy"}
      </button>
      <Canvas>
        <AppContext.Provider value={context}>
          <axesHelper />
          <ambientLight />
          <pointLight position={[0, 0, 0]} />
          <perspectiveCamera
            aspect={1200 / 600}
            fov={45}
            position={[0, 0, 2]}
          />
          <Node size={[1, 100, 100]} coords={[-5, 0, 0]} />
          <BatchNodes size={100} nodeConfig={[0.1, 100, 100]} />
          <CameraControls />
        </AppContext.Provider>
      </Canvas>

      {/* {nodes} */}
      {/* {edges} */}
      {/* <Node size={[0.1, 100, 100]} coords={[0, 0, 0]} />
      <Node size={[0.1, 100, 100]} coords={[5, 1, 0]} />
      <Edge coords={[0, 0, 0]} nextCoords={[5, 1, 0]} />

      <Node size={[0.1, 100, 100]} coords={[1, 0, 0]} />
      <Node size={[0.1, 100, 100]} coords={[5, 1, 0]} />

      <Node size={[0.1, 100, 100]} coords={[4, 1, 0]} />
      <Edge coords={[0, 0, 0]} nextCoords={[4, 1, 0]} /> */}

      {/* <Node size={[0.1, 100, 100]} coords={[1, 0, 0]} />
      <Node size={[0.1, 100, 100]} coords={[4, 1, 0]} />
      <Edge coords={[1, 0, 0]} nextCoords={[4, 1, 0]} /> */}
    </div>
  );
};

export default Home;
