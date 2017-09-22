import * as THREE from 'three';
import OrbitControls from 'imports-loader?THREE=three!exports-loader?THREE.OrbitControls!three-extras/controls/OrbitControls';


const FOV = 45,
    ASPECT = window.innerWidth / window.innerHeight,
    NEAR = 0.1,
    FAR = 1000,
    GRID_SIZE = 100,
    GRID_STEP = 10;


class World {
    constructor(audioAnalyser) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(FOV, ASPECT, NEAR, FAR);
        this.renderer = new THREE.WebGLRenderer();
        this.effects = [];
        this.audioAnalyser = audioAnalyser;

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        /* eslint-disable no-unused-vars */
        const controls = new OrbitControls(this.camera, this.renderer.domElement);
        /* eslint-enable no-unused-vars */


        const gridHelper = new THREE.GridHelper(GRID_SIZE, GRID_STEP);
        this.scene.add(gridHelper);

        this.camera.position.set(0, 5, 50);
        this.camera.lookAt(this.scene.position);
    }

    render() {
        requestAnimationFrame(this.render.bind(this));

        this.renderer.render(this.scene, this.camera);

        this.effects.forEach((effect) => {
            effect.render(this.audioAnalyser.getByteFrequencyData());
        });
    }

    add(object) {
        this.scene.add(object);
    }

    addEffect(effect) {
        effect.initialize(this.scene);
        this.effects.push(effect);
    }
}


export default World;