'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, transform } from 'framer-motion';
import styles from './styles.module.css';

export default function StickyCursor({ stickyElement }: { stickyElement: React.RefObject<HTMLElement> }) {
  const cursorOuterRef = useRef(null);
  const cursorInnerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const cursorSize = 120;
  const innerCursorSize = 6;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  };

  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1)
  };

  // Smooth options for outer cursor
  const outerSmoothOptions = { damping: 15, stiffness: 150, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, outerSmoothOptions),
    y: useSpring(mouse.y, outerSmoothOptions)
  };

  // Smoother options for inner cursor
  const innerSmoothOptions = { damping: 25, stiffness: 250, mass: 0.3 };
  const smoothInnerMouse = {
    x: useSpring(mouse.x, innerSmoothOptions),
    y: useSpring(mouse.y, innerSmoothOptions)
  };

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    if (!stickyElement.current) return;

    const { left, top, height, width } = stickyElement.current.getBoundingClientRect();
    const center = { x: left + width / 2, y: top + height / 2 };

    if (isElementHovered(e.target as Element)) {
      setIsHovered(true);
      const distance = {
        x: clientX - center.x,
        y: clientY - center.y
      };
      
      const magnetStrength = 0.4;
      const targetX = (center.x - cursorSize / 2) + (distance.x * magnetStrength);
      const targetY = (center.y - cursorSize / 2) + (distance.y * magnetStrength);
      
      mouse.x.set(targetX);
      mouse.y.set(targetY);

      // Calculate scale based on distance from center
      const distanceFromCenter = Math.sqrt(distance.x ** 2 + distance.y ** 2);
      const maxDistance = Math.sqrt((width / 2) ** 2 + (height / 2) ** 2);
      const scaleValue = transform(distanceFromCenter, [0, maxDistance], [1.2, 0.8]);
      
      scale.x.set(scaleValue);
      scale.y.set(scaleValue);
    } else {
      setIsHovered(false);
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
      scale.x.set(1);
      scale.y.set(1);
    }
  };

  const isElementHovered = (element: Element): boolean => {
    return stickyElement.current?.contains(element) || false;
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [isHovered]);

  return (
    <div className={styles.cursorContainer}>
      {/* Outer cursor */}
      <motion.div
        ref={cursorOuterRef}
        className={`${styles.cursorOuter} ${isHovered ? styles.cursorOuterHovered : ''}`}
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
          scaleX: scale.x,
          scaleY: scale.y,
          width: cursorSize,
          height: cursorSize
        }}
      >
        <div className={styles.cursorOuterRings}>
          {[...Array(3)].map((_, i) => (
            <div key={i} className={styles.cursorOuterRing} />
          ))}
        </div>
        <div className={styles.gradientOrb} />
      </motion.div>

      {/* Inner cursor */}
      <motion.div
        ref={cursorInnerRef}
        className={`${styles.cursorInner} ${isHovered ? styles.cursorInnerHovered : ''}`}
        style={{
          left: smoothInnerMouse.x,
          top: smoothInnerMouse.y,
          width: innerCursorSize,
          height: innerCursorSize,
          x: cursorSize / 2 - innerCursorSize / 2,
          y: cursorSize / 2 - innerCursorSize / 2
        }}
      />
    </div>
  );
}