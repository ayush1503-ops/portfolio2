import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useReducedMotion } from 'framer-motion';

export default function ThreeHeroScene() {
  const mountRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'low-power'
      });
    } catch {
      mount.dataset.webgl = 'unavailable';
      return undefined;
    }

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.setAttribute('aria-hidden', 'true');
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 50);
    camera.position.set(0, 0, 8.4);

    const heroGroup = new THREE.Group();
    scene.add(heroGroup);
    const geometries = [];
    const materials = [];

    const makeMaterial = (color, opacity = 0.72, wireframe = false) => {
      const material = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity,
        wireframe,
        depthWrite: false,
        side: THREE.DoubleSide
      });
      materials.push(material);
      return material;
    };
    const addMesh = (geometry, material, parent = heroGroup) => {
      geometries.push(geometry);
      const mesh = new THREE.Mesh(geometry, material);
      parent.add(mesh);
      return mesh;
    };

    // Hand-authored wireframe and orbit geometry: original site colors, no generated artwork.
    const blue = makeMaterial(0x2449d8, 0.72);
    const acid = makeMaterial(0xe8ff42, 0.78);
    const orangeWire = makeMaterial(0xff633b, 0.62, true);
    const blueWire = makeMaterial(0x2449d8, 0.7, true);

    const orbitA = new THREE.Group();
    orbitA.position.set(2.4, 0.05, -0.25);
    orbitA.scale.setScalar(0.9);
    heroGroup.add(orbitA);
    const ringA = addMesh(new THREE.TorusGeometry(1.2, 0.012, 8, 120), blue, orbitA);
    ringA.rotation.set(0.92, 0.14, -0.24);
    const ringB = addMesh(new THREE.TorusGeometry(1.62, 0.008, 8, 144), acid, orbitA);
    ringB.rotation.set(1.08, 0.3, 0.82);
    const knot = addMesh(new THREE.TorusKnotGeometry(0.48, 0.012, 96, 8, 2, 3), orangeWire, orbitA);
    knot.position.set(0.14, 0.04, 0.15);
    knot.rotation.set(0.5, 0.4, -0.3);

    const orbitB = new THREE.Group();
    orbitB.position.set(-2.4, 0.24, -0.7);
    orbitB.scale.setScalar(0.64);
    heroGroup.add(orbitB);
    const ringC = addMesh(new THREE.TorusGeometry(1.1, 0.013, 8, 100), acid, orbitB);
    ringC.rotation.set(0.55, 0.2, 0.76);
    const poly = addMesh(new THREE.IcosahedronGeometry(0.56, 1), blueWire, orbitB);
    poly.rotation.set(0.3, 0.6, 0.2);

    const sparkA = addMesh(new THREE.OctahedronGeometry(0.16, 0), acid);
    sparkA.position.set(-3.8, 1.04, -0.35);
    const sparkB = addMesh(new THREE.IcosahedronGeometry(0.15, 0), orangeWire);
    sparkB.position.set(3.9, -1.08, -0.5);

    const particleCount = 92;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 9.2;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 3.8;
      positions[i * 3 + 2] = -2.5 + Math.random() * 2.2;
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometries.push(particleGeometry);
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x2449d8,
      size: 0.018,
      transparent: true,
      opacity: 0.72,
      depthWrite: false,
      sizeAttenuation: true
    });
    materials.push(particleMaterial);
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect();
      if (!width || !height) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      heroGroup.scale.setScalar(width < 520 ? 0.78 : width < 760 ? 0.9 : 1);
      renderer.render(scene, camera);
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);
    resize();

    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const heroArt = mount.parentElement;
    const onPointerMove = (event) => {
      const bounds = mount.getBoundingClientRect();
      pointer.targetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.45;
      pointer.targetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 0.35;
    };
    const onPointerLeave = () => {
      pointer.targetX = 0;
      pointer.targetY = 0;
    };
    heroArt?.addEventListener('pointermove', onPointerMove, { passive: true });
    heroArt?.addEventListener('pointerleave', onPointerLeave, { passive: true });

    let frame = 0;
    let visible = true;
    let elapsed = 0;
    const render = (time) => {
      if (reduceMotion || !visible || document.hidden) {
        renderer.render(scene, camera);
        frame = 0;
        return;
      }
      elapsed = time * 0.001;
      pointer.x += (pointer.targetX - pointer.x) * 0.045;
      pointer.y += (pointer.targetY - pointer.y) * 0.045;
      heroGroup.rotation.y = elapsed * 0.055 + pointer.x * 0.35;
      heroGroup.rotation.x = pointer.y * 0.2;
      orbitA.rotation.y = elapsed * 0.12;
      orbitB.rotation.x = elapsed * 0.1;
      ringB.rotation.z += 0.0015;
      knot.rotation.x += 0.002;
      knot.rotation.y -= 0.0013;
      poly.rotation.y += 0.002;
      sparkA.position.y = 1.04 + Math.sin(elapsed * 1.1) * 0.12;
      sparkB.position.y = -1.08 + Math.cos(elapsed * 0.8) * 0.1;
      particles.rotation.y = elapsed * 0.012;
      renderer.render(scene, camera);
      frame = window.requestAnimationFrame(render);
    };
    const start = () => {
      visible = true;
      if (!reduceMotion && !frame && !document.hidden) frame = window.requestAnimationFrame(render);
      else renderer.render(scene, camera);
    };
    const stop = () => {
      visible = false;
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
    };
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) start();
      else stop();
    }, { threshold: 0.02 });
    visibilityObserver.observe(mount);
    const onVisibilityChange = () => (document.hidden ? stop() : start());
    document.addEventListener('visibilitychange', onVisibilityChange);
    if (reduceMotion) renderer.render(scene, camera);

    return () => {
      stop();
      visibilityObserver.disconnect();
      resizeObserver.disconnect();
      document.removeEventListener('visibilitychange', onVisibilityChange);
      heroArt?.removeEventListener('pointermove', onPointerMove);
      heroArt?.removeEventListener('pointerleave', onPointerLeave);
      geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((material) => material.dispose());
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [reduceMotion]);

  return <div className="hero-scene" ref={mountRef} aria-hidden="true" />;
}

