'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useTheme } from '@/context/ThemeContext'

export const Background = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()
  
  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 8000
    const posArray = new Float32Array(particlesCount * 3)

    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

    // Create material
    const particlesMaterial = new THREE.PointsMaterial({
      size: theme === 'dark' ? 0.008 : 0.006,
      color: theme === 'dark' ? '#ffffff' : '#000000',
      transparent: true,
      opacity: theme === 'dark' ? 0.8 : 0.5,
    })

    // Create mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Position camera
    camera.position.z = 2

    // Mouse movement effect
    let mouseX = 0
    let mouseY = 0
    let targetMouseX = 0
    let targetMouseY = 0

    const onDocumentMouseMove = (event: MouseEvent) => {
      targetMouseX = (event.clientX - window.innerWidth / 2) * 0.00005
      targetMouseY = (event.clientY - window.innerHeight / 2) * 0.00005
    }

    document.addEventListener('mousemove', onDocumentMouseMove)

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)
      
      // Smooth mouse movement
      mouseX += (targetMouseX - mouseX) * 0.05
      mouseY += (targetMouseY - mouseY) * 0.05
      
      particlesMesh.rotation.y += 0.0003
      particlesMesh.rotation.x += mouseY * 0.02
      particlesMesh.rotation.y += mouseX * 0.02

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      document.removeEventListener('mousemove', onDocumentMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [theme])

  return (
    <div 
      ref={containerRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  )
}
