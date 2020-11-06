let scene, camera, renderer, sphereCamera;
const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(500, {
  // format: THREE.RGBFormat,
  // generateMipmaps: true,
  // minFilter: THREE.LinearMipmapLinearFilter,
});

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    1,
    5000
  );
  camera.position.set(-700, 400, -1000);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  let controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableZoom = false;

  let urls = [
    './images/scene_r.jpg',
    './images/scene_l.jpg',
    './images/scene_u.jpg',
    './images/scene_d.jpg',
    './images/scene_f.jpg',
    './images/scene_b.jpg',
  ];
  let loader = new THREE.CubeTextureLoader();
  scene.background = loader.load(urls);

  sphereCamera = new THREE.CubeCamera(1, 1000, cubeRenderTarget);
  scene.add(sphereCamera);

  let sphereMaterial = new THREE.MeshBasicMaterial({
    envMap: scene.background,
  });
  let sphereGeo = new THREE.SphereGeometry(350, 50, 50);
  let sphere = new THREE.Mesh(sphereGeo, sphereMaterial);
  sphere.position.set(0, 100, 0);
  sphereCamera.position.copy(sphere.position);

  scene.add(sphere);

  const axesHelper = new THREE.AxesHelper(20);
  scene.add(axesHelper);

  render();
}

function render() {
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

init();
