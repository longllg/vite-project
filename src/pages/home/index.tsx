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

import { OrbitControls } from "src/utils/OrbitControls.js";
const Home = () => {
  console.log(ShapeUtils, "three");
  const [status, setStatus] = useState<boolean>(true);
  const init = () => {
    let camera: PerspectiveCamera | Camera,
      scene: Object3D<Event> | Scene,
      renderer: WebGLRenderer;
    let geometry,
      material,
      mesh: Object3D<Event> | Mesh<BoxGeometry, MeshNormalMaterial>;
    camera = new PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.01,
      10
    );
    camera.position.z = 1;

    scene = new Scene();
    const animation = (time: number) => {
      if (status) {
        setStatus(false);
        mesh.rotation.x = time / 2000;
        mesh.rotation.y = time / 1000;
        renderer.render(scene, camera);
      }
    };
    geometry = new BoxGeometry(0.2, 0.2, 1);
    material = new MeshNormalMaterial();

    mesh = new Mesh(geometry, material);
    scene.add(mesh);

    renderer = new WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animation);
    document.body.appendChild(renderer.domElement);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener("change", animation);
  };

  // const { data } = useRequest<any>(getData, { manual: false });
  useEffect(() => {
    init();
  }, []);
  return <div className="App">232323</div>;
};

export default Home;
