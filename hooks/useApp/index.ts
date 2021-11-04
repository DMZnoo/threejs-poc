import * as React from "react";

export type AppContextProps = {
  showEdges: boolean;
  toggleEdges: () => void;
  goCrazy: boolean;
  toggleGoCrazy: () => void;
  nodeCount: number;
  setNodeCount: (val: number) => void;
};

const useApp = (): AppContextProps => {
  const [showEdges, setShowEdges] = React.useState<boolean>(false);
  const [goCrazy, setGoCrazy] = React.useState<boolean>(false);
  const [nodeCount, setNodeCount] = React.useState<number>(0);

  const toggleEdges = () => setShowEdges(!showEdges);
  const toggleGoCrazy = () => setGoCrazy(!goCrazy);

  return {
    showEdges,
    toggleEdges,
    toggleGoCrazy,
    goCrazy,
    nodeCount,
    setNodeCount
  }

};

export const AppContext = React.createContext<AppContextProps>({} as AppContextProps);

export default useApp;