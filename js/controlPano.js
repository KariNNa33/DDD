const Panorama1 = new PANOLENS.ImagePanorama('assets/1.jpg');
const Panorama2 = new PANOLENS.ImagePanorama('assets/2.jpg');
const Panorama3 = new PANOLENS.ImagePanorama('assets/3.1.jpg');
const Panorama4 = new PANOLENS.ImagePanorama('assets/5.1.jpg');
const Panorama5 = new PANOLENS.ImagePanorama('assets/3.2.jpg');
const Panorama6 = new PANOLENS.ImagePanorama('assets/4.2.jpg');
let imageContainer = document.querySelector('.panorama__container');

let SpotPositions = [
       // x y z
    // 1 - 2
    new THREE.Vector3(-1200, 0, 1000),
    // 2 - 1
    new THREE.Vector3(100, 0, 1000),



    // 2 - 3.1
    new THREE.Vector3(-600, 0, -1000),
    // 3.1 - 2
    new THREE.Vector3(1500, 0, 1000),

    // 3.1 - 5.1
    new THREE.Vector3(-900, 0, -900),
    // 5.1 - 3.1
    new THREE.Vector3(-900, 0, -900),



    // 2 - 3.2
    new THREE.Vector3(1500, 100, -900),
    // 3.2 - 4.2
    new THREE.Vector3(500, 0, -800),
    // 4.2 - 3.2
    new THREE.Vector3(-800, 0, 100),
    // 3.2 - 2
    new THREE.Vector3(-1500, 100, 1000),
    ]

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    controlBar: true,
    autoRotate: true,
    autoRotateSpeed: 0.4,
    cameraFov: 120
});
// начало
Panorama1.link(Panorama2, SpotPositions[0]);
// обратно
Panorama2.link(Panorama1, SpotPositions[1]);

// 1 путь
Panorama2.link(Panorama3, SpotPositions[2]);
Panorama3.link(Panorama2, SpotPositions[3]);
Panorama3.link(Panorama4, SpotPositions[4]);
Panorama4.link(Panorama3, SpotPositions[5]);

// 2 путь
Panorama2.link(Panorama5, SpotPositions[6]);
Panorama5.link(Panorama6, SpotPositions[7]);
Panorama6.link(Panorama5, SpotPositions[8]);
Panorama5.link(Panorama2, SpotPositions[9]);

viewer.add(Panorama1, Panorama2, Panorama3, Panorama4, Panorama5, Panorama6);
