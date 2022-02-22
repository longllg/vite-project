import { useEffect, useState } from 'react';
import { getData } from 'src/api';
import {
  ShapeUtils,
  MeshLambertMaterial,
  PerspectiveCamera,
  Scene,
  BoxGeometry,
  MeshNormalMaterial,
  Mesh,
  WebGLRenderer,
  Event,
  Object3D,
  Camera,
  SphereGeometry,
} from 'three';

import { OrbitControls } from 'src/utils/OrbitControls.js';
import useRequest from 'src/hooks/useRequest';
const Home = () => {
  const init = () => {
    let camera: PerspectiveCamera | Camera,
      scene: Object3D<Event> | Scene,
      renderer: WebGLRenderer;
    let geometry,
      material,
      material1,
      geometry1,
      mesh1: Object3D<Event> | Mesh<BoxGeometry, MeshNormalMaterial>;
    camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.07, 10);
    camera.position.z = 1;

    scene = new Scene();
    const animation = (time: number) => {
      renderer.render(scene, camera);
      renderer.setAnimationLoop(animation);
    };

    // geometry = new BoxGeometry(0.2, 0.2, 0.2);
    // material = new MeshNormalMaterial();

    // mesh1 = new Mesh(geometry, material);
    // scene.add(mesh1);

    var geometry2 = new SphereGeometry(60, 40, 40);
    var material2 = new MeshLambertMaterial({
      color: 0xff0000,
    });
    var mesh2 = new Mesh(geometry2, material2); //网格模型对象Mesh
    mesh2.translateY(120); //球体网格模型沿Y轴正方向平移120
    scene.add(mesh2);

    renderer = new WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    animation(1000);

    document.getElementById('#content')?.appendChild(renderer.domElement);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', animation, 1000);
  };

  const { data } = useRequest<any>(getData, { manual: false });
  useEffect(() => {
    init();
  }, []);
  return <div className="App" id="#content"></div>;
};
export default Home;
