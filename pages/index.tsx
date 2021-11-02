import { useFrame } from "@react-three/fiber";
import type { NextPage } from "next";
import * as React from "react";
import Edge from "../components/Edge";
import Node from "../components/Node";

const Home: NextPage = () => {
  const [edges, setEdges] = React.useState<any[]>();
  const [nodes, setNodes] = React.useState<any[]>();

  React.useEffect(() => {
    const nodesArr = [];
    const edgesArr = [];
    const maxNodes = 30;

    for (let i = 0; i < maxNodes; i += 2) {
      // const x = Math.random() * 10 - 5;
      // const y = Math.random() * 10 - 5;
      // const z = Math.random() * 10 - 5;
      const x = Math.random() * 10 - 5,
        y = Math.random() * 10 - 5,
        z = Math.random() * 10 - 5;

      // const x = 0,
      //   y = 1,
      //   z = 0;

      const x1 = Math.random() * 10 - 5;
      const y1 = Math.random() * 10 - 5;
      const z1 = Math.random() * 10 - 5;

      nodesArr.push(
        <Node
          key={"node-" + i}
          size={[0.1, 100, 100]}
          coords={[x, y, z]}
          color="red"
        />
      );

      edgesArr.push(
        <Edge key={"edge-" + i} coords={[x, y, z]} nextCoords={[x1, y1, z1]} />
      );

      nodesArr.push(
        <Node
          key={"node-1-" + i}
          size={[0.1, 100, 100]}
          coords={[x1, y1, z1]}
          color="green"
        />
      );
    }

    setEdges(edgesArr);
    setNodes(nodesArr);
  }, []);

  // const renderNodes = (size: number) => {
  //   return nodesArr;
  // };

  return (
    <>
      {/* <Node size={[1, 100, 100]} coords={[0, 0, 0]} />
      <Node size={[1, 100, 100]} coords={[5, 0, 0]} />
      <Node size={[1, 100, 100]} coords={[-5, 0, 0]} /> */}
      {nodes}
      {edges}
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
    </>
  );
};

export default Home;
