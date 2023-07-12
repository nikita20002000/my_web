import * as THREE from 'three'
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";




let scene;
let camera;
let renderer;

function init() {
    let container = document.querySelector('.container')

    scene = new THREE.Scene()
    scene.backgroundColor = new THREE.Color(0xFFFFFFFF)

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000)

    renderer = new THREE.WebGLRenderer({antialias: true})
    renderer.setSize(window.innerWidth, window.innerHeight)
    container.appendChild(renderer.domElement)

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    let light = new THREE.PointLight(0x4c4c4, 1);
    light.position.set(0, 300, 500);
    scene.add(light);

    let light2 = new THREE.PointLight(0x4c4c4, 1);
    light.position.set(500, 300, 500);
    scene.add(light2);

}


const loader = new OBJLoader();
loader.load('dollar.obj', obj => {
    scene.add(obj.scene);
},
    function (error) {
    console.log('ERROR: ' + error)
    }
)
function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)

}

animate()