console.log("connected to html")

var renderer, mesh;
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x121212)

//const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 2000);
const camera = new THREE.PerspectiveCamera(50, document.getElementById('canva').clientWidth / document.getElementById('canva').clientHeight, 0.1, 2000);
//camera.position.set(0, 0, -300);
camera.position.set(0, 0, 70)


renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('model') });
//renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setSize(document.getElementById('canva').clientWidth, document.getElementById('canva').clientHeight);


window.addEventListener('resize', function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix;
})

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.minDistance = 200
controls.maxDistance = 450
controls.update();



const alight = new THREE.AmbientLight(0xe3dac9); // soft white light
scene.add(alight);


var light = new THREE.PointLight(0xf5c693, 0.8);
light.position.set(0, 0, 70)
scene.add(light)

var loader = new THREE.STLLoader();
loader.load('/Shoulder_Bone.stl', function (geometry) {
    var material = new THREE.MeshPhongMaterial({ color: 0xe3dac9 });

    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(50, -70, 750)
    //mesh.position.set(0,0,0)
    scene.add(mesh);

});

const axesHelper = new THREE.AxesHelper(50);
scene.add(axesHelper);

function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
    controls.update();

}
animate();