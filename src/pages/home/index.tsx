import { useEffect, useState } from "react";
import { getData } from "src/api";
import {
  ShapeUtils,
  PerspectiveCamera,
  Scene,
  BoxGeometry,
  MeshNormalMaterial,
  Mesh,
  WebGLRenderer,
  Event,
  Object3D,
  Camera,
} from "three";

import useRequest from "src/hooks/useRequest";
const Home = () => {
  console.log(ShapeUtils, "three");
  const [status, setStatus] = useState<boolean>(true);

  const { data } = useRequest<any>(getData, { manual: false });

  return <div className="App" id="#content"></div>;
};

export default Home;
