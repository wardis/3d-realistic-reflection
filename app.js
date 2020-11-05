let scene, camera, renderer;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    1,
    5000
  );
  camera.position.set(0, 400, 1000);

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

  render();
}

function render() {
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

init();
