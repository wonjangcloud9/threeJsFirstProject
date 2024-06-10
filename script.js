import * as THREE from "three";
import gsap from "gsap";

// Canvas
const canvas = document.querySelector("canvas.webgl");

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */

const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);

scene.add(mesh);
// const mesh = new THREE.Mesh(geometry, material);
// mesh.position.z = -3;
// mesh.position.y = -2;
// mesh.position.x = 3;

// mesh.position.set(0.7, -0.6, 1);

// scene.add(mesh);

// Scale

// mesh.scale.set(2, 0.5, 0.5);

// Rotation

// mesh.rotation.reorder("YXZ");
// mesh.rotation.x = Math.PI * 0.25;
// mesh.rotation.y = Math.PI * 0.25;

// Axes helper
// const axesHelper = new THREE.AxesHelper();
// scene.add(axesHelper);

/**
 * Camera
 */
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
const aspectRatio = sizes.width / sizes.height;
const camera = new THREE.OrthographicCamera(
  -1 * aspectRatio,
  1 * aspectRatio,
  1,
  -1,
  0.1,
  100
);
camera.position.x = 2;
camera.position.y = 2;
camera.position.z = 2;
camera.lookAt(mesh.position);
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Animation

const clock = new THREE.Clock();

// gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update objects
  mesh.rotation.y = elapsedTime;

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
