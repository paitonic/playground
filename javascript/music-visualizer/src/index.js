import * as THREE from 'three';
import OrbitControls from 'imports-loader?THREE=three!exports-loader?THREE.OrbitControls!three-extras/controls/OrbitControls';

import './styles.css';


const FOV = 45,
    ASPECT = window.innerWidth / window.innerHeight,
    NEAR = 0.1,
    FAR = 1000;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(FOV, ASPECT, NEAR, FAR);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/* eslint-disable no-unused-vars */
const controls = new OrbitControls(camera, renderer.domElement);
/* eslint-enable no-unused-vars */

const GRID_SIZE = 100;
const GRID_STEP = 10;
const gridHelper = new THREE.GridHelper(GRID_SIZE, GRID_STEP);
scene.add(gridHelper);

camera.position.set(0, 5, 50);
camera.lookAt(scene.position);


function render() {
    requestAnimationFrame(render);

    renderer.render(scene, camera);
}

render();
