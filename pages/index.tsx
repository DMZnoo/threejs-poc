import { useFrame } from "@react-three/fiber";
import type { NextPage } from "next";
import * as React from "react";
import Edge from "../components/Edge";
import Node from "../components/Node";

const Home: NextPage = () => {
  const [edges, setEdges] = React.useState<any[]>();
  const [nodes, setNodes] = React.useState<any[]>();

  React.useEffect(() => {
    let nodesArr = [];
    let edgesArr = [];
    let left: number[] = [];
    let right: number[] = [];
    let maxNodes = 10;
    let x,
      y,
      z = 0;
    let preX = 0,
      preY = 0,
      preZ = 0;
    for (let i = 0; i < maxNodes; i++) {
      x = Math.random() * 10 - 5;
      y = Math.random() * 10 - 5;
      z = Math.random() * 10 - 5;
      nodesArr.push(<Node key={i} size={[0.1, 100, 100]} coords={[x, y, z]} />);
      if (i % 2 === 0 && i < maxNodes) {
        const scaleFactor = Math.sqrt(
          Math.pow(preX - x, 2) + Math.pow(preY - y, 2) + Math.pow(preZ - z, 2)
        );
        edgesArr.push(
          <Edge
            coords={[x, y, z]}
            scaleFactor={scaleFactor}
            rotationFactor={[preX, preY, preZ]}
          />
        );
      } else {
        edgesArr.push(<Edge coords={[preX, preY, preZ]} />);
      }
      preX = x;
      preY = y;
      preZ = z;
    }

    // edgesArr.push(
    //   <Edge
    //     coords={[0, 0, 0]}
    //     scaleFactor={1}
    //     rotationFactor={[5, 0, 0]}
    //   />
    // );
    // edgesArr.push(
    //   <Edge
    //     coords={[5, 0, 0]}
    //     scaleFactor={1}
    //     rotationFactor={[5, 0, 0]}
    //   />
    // );
    // edgesArr.push(
    //   <Edge
    //     coords={[-5, 0, 0]}
    //     scaleFactor={1}
    //     rotationFactor={[5, 0, 0]}
    //   />
    // );
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
      {/* <Edge coords={[5, 0, 0]} /> */}
    </>
  );
};

export default Home;
