"use client";

import React, { useLayoutEffect, useRef } from "react";
import * as THREE from "three";
import {
  BACKGROUND_PRESET,
  FRAGMENT_SHADER_SOURCE,
  VERTEX_SHADER_SOURCE,
} from "./constants";
import { getRandomFloat } from "./utils";

export function BackgroundClient() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const threeRef = useRef<{
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.OrthographicCamera;
    material: THREE.ShaderMaterial;
    clock: THREE.Clock;
    uniforms: {
      uResolution: { value: THREE.Vector2 };
      uTime: { value: number };
      uColor: { value: THREE.Color };
      uPixelSize: { value: number };
      uScale: { value: number };
      uDensity: { value: number };
      uPixelJitter: { value: number };
      uEdgeFade: { value: number };
    };
    resizeObserver?: ResizeObserver;
    raf?: number;
    quad?: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
    timeOffset?: number;
  } | null>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const {
      pixelSize,
      color,
      antialias,
      patternScale,
      patternDensity,
      pixelSizeJitter,
      speed,
      transparent,
      edgeFade,
    } = BACKGROUND_PRESET;

    const canvas = document.createElement("canvas");
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias,
      alpha: true,
      powerPreference: "high-performance",
    });

    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    if (transparent) renderer.setClearAlpha(0);
    else renderer.setClearColor(0x000000, 1);

    const uniforms = {
      uResolution: { value: new THREE.Vector2(0, 0) },
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(color) },
      uPixelSize: { value: pixelSize * renderer.getPixelRatio() },
      uScale: { value: patternScale },
      uDensity: { value: patternDensity },
      uPixelJitter: { value: pixelSizeJitter },
      uEdgeFade: { value: edgeFade },
    };

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const material = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER_SOURCE,
      fragmentShader: FRAGMENT_SHADER_SOURCE,
      uniforms,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      glslVersion: THREE.GLSL3,
    });

    const quadGeom = new THREE.PlaneGeometry(2, 2);
    const quad = new THREE.Mesh(quadGeom, material);
    scene.add(quad);

    const clock = new THREE.Clock();
    const setSize = () => {
      const w = container.clientWidth || 1;
      const h = container.clientHeight || 1;
      renderer.setSize(w, h, false);
      uniforms.uResolution.value.set(
        renderer.domElement.width,
        renderer.domElement.height
      );
      uniforms.uPixelSize.value = pixelSize * renderer.getPixelRatio();
    };
    setSize();

    const ro = new ResizeObserver(setSize);
    ro.observe(container);

    const timeOffset = getRandomFloat() * 1000;
    let raf = 0;

    const animate = () => {
      uniforms.uTime.value = timeOffset + clock.getElapsedTime() * speed;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    threeRef.current = {
      renderer,
      scene,
      camera,
      material,
      clock,
      uniforms,
      resizeObserver: ro,
      raf,
      quad,
      timeOffset,
    };

    return () => {
      if (!threeRef.current) return;
      const t = threeRef.current;
      t.resizeObserver?.disconnect();
      cancelAnimationFrame(t.raf!);
      t.quad?.geometry.dispose();
      t.material.dispose();
      t.renderer.dispose();
      if (t.renderer.domElement.parentElement === container)
        container.removeChild(t.renderer.domElement);
      threeRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 w-screen h-screen overflow-hidden pointer-events-none"
      aria-hidden="true"
    />
  );
}


