import * as THREE from 'three';


class Cubes {
    constructor(frequencyBinCount) {
        this.cubes = this.createBox(
            frequencyBinCount,
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({color: 0xFFFFFF, transparent: true, opacity: 0.5})
        );

        this.center();
    }

    createBox(numberOfBoxes, geometry, material) {
        this.cubes = new Array(numberOfBoxes);

        for (let i = 0, max = numberOfBoxes; i < max; i += 1) {
            this.cubes[i] = new THREE.Mesh(geometry, material);
        }

        return this.cubes;
    }

    center() {
        const width = this.cubes[0].scale.x;
        const objectsTotalWidth = this.cubes.length * width;

        // set the first object position
        this.cubes[0].position.x = -(objectsTotalWidth / 2);

        // go over all object positions and update their position.x based on previous object position + scale
        for (let i = 1, max = this.cubes.length; i < max; i += 1) {
            this.cubes[i].position.x = this.cubes[i-1].position.x + this.cubes[i].scale.x;
        }
    }

    initialize(scene) {
        this.cubes.forEach(function(obj) {
            if (obj.length) {
                obj.forEach(function(innerObj) {
                    scene.add(innerObj);
                });
            } else {
                scene.add(obj);
            }
        });
    }

    render(audioData) {
        for (let i = 0, max = audioData.length; i < max; i += 1) {
            // scale can not be of size 0.
            if (audioData[i] > 0) {
                this.cubes[i].scale.y = audioData[i];
            }
        }
    }
}


export default Cubes;
