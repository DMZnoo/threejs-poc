import * as React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  Canvas,
  extend,
  ReactThreeFiber,
  useFrame,
  useThree,
} from "@react-three/fiber";
import "tailwindcss/tailwind.css";
import { FirstPersonControls } from "@react-three/drei";
import useApp, { AppContext } from "../hooks/useApp";
import AppContextProvider from "../components/Providers/AppContextProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <AppContextProvider>
    <Component {...pageProps} />
    // </AppContextProvider>
  );
}

export default MyApp;
