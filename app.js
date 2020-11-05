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

  renderer.render(scene, camera);
}

init();
