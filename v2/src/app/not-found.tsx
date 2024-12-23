"use client";

// react
import { useEffect, useState, useCallback } from "react";
// next
import Link from "next/link";
// imports
import { ArrowRight, Home } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

type MousePosition = {
  x: number;
  y: number;
};

type Velocity = {
  x: number;
  y: number;
};

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  velocity: Velocity;
  opacity: number;
};

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [particles, setParticles] = useState<Array<Particle>>([]);
  const controls = useAnimation();

  // Increased number of particles
  useEffect(() => {
    if (typeof window !== "undefined") {
      const newParticles: Array<Particle> = [...Array(50)].map((_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3.5 + 1.5,
        velocity: {
          x: (Math.random() - 0.5) * 0.8,
          y: (Math.random() - 0.5) * 0.8,
        },
        opacity: Math.random() * 0.4 + 0.2,
      }));
      setParticles(newParticles);
    }
  }, []);

  // Smooth mouse tracking with interpolation
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition((prev) => ({
      x: prev.x + (e.clientX - prev.x) * 0.1,
      y: prev.y + (e.clientY - prev.y) * 0.1,
    }));
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  // Particle animation system
  useEffect(() => {
    if (particles.length === 0) return;

    let animationFrameId: number;

    const animateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle: Particle) => {
          let newX = particle.x + particle.velocity.x;
          let newY = particle.y + particle.velocity.y;

          // Bounce off boundaries with padding
          if (newX < -50) newX = window.innerWidth + 50;
          if (newX > window.innerWidth + 50) newX = -50;
          if (newY < -50) newY = window.innerHeight + 50;
          if (newY > window.innerHeight + 50) newY = -50;

          // Subtle attraction to mouse
          const dx = mousePosition.x - newX;
          const dy = mousePosition.y - newY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          let velocityX = particle.velocity.x;
          let velocityY = particle.velocity.y;

          if (distance < 200) {
            const force = (200 - distance) / 15000;
            velocityX -= dx * force;
            velocityY -= dy * force;
          }

          return {
            ...particle,
            x: newX,
            y: newY,
            velocity: {
              x: velocityX * 0.99,
              y: velocityY * 0.99,
            },
          };
        })
      );
      animationFrameId = requestAnimationFrame(animateParticles);
    };

    animationFrameId = requestAnimationFrame(animateParticles);
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [particles, mousePosition]);

  // Enhanced 404 interaction
  const handle404Hover = useCallback(() => {
    controls.start({
      scale: [1, 1.1, 1],
      rotateX: [0, 10, -10, 0],
      rotateY: [0, -10, 10, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    });
  }, [controls]);

  return (
    <div className="relative w-full h-min flex flex-col items-center justify-center pt-32 pb-14 px-4 overflow-hidden">
      {/* Fixed particle system */}
      <div className="fixed inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: `rgba(255, 127, 80, ${particle.opacity})`,
              left: 0,
              top: 0,
              x: particle.x,
              y: particle.y,
              filter: "blur(1px)",
            }}
            animate={{
              opacity: [
                particle.opacity,
                particle.opacity * 0.5,
                particle.opacity,
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-2xl w-full text-center space-y-8 relative z-10">
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Enhanced 404 heading with hover effect */}
          <motion.h1
            className="text-8xl lg:text-[10rem] font-bold leading-none tracking-tighter text-foreground relative cursor-pointer"
            animate={controls}
            onHoverStart={handle404Hover}
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px",
              textShadow: "0 0 20px rgba(255,127,80,0.3)",
            }}
          >
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8, ease: "backOut" }}
            >
              4
            </motion.div>
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
            >
              0
            </motion.div>
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "backOut" }}
            >
              4
            </motion.div>
          </motion.h1>

          <motion.p
            className="text-accent lg:text-lg font-bricolageGrotesque max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            The page {"you're"} looking for {"doesn't"} exist or has been moved
            to another URL
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              rotateX: 5,
              rotateY: -5,
            }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg 
                         bg-gradient-to-br from-secondary/30 to-secondary/20 
                         backdrop-blur-md backdrop-saturate-150
                         border border-secondary/20
                         text-foreground text-sm lg:text-base
                         transition-all duration-300
                         shadow-[0_0_15px_rgba(0,0,0,0.1)]
                         hover:shadow-[0_0_20px_rgba(0,0,0,0.15)]
                         relative
                         before:absolute before:inset-0 
                         before:bg-gradient-to-br before:from-secondary/10 before:to-transparent 
                         before:rounded-lg before:opacity-0 before:transition-opacity
                         hover:before:opacity-100"
            >
              <Home className="w-4 h-4 lg:w-5 lg:h-5" />
              Back to Home
            </Link>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
              rotateX: 5,
              rotateY: 5,
            }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg 
                         bg-gradient-to-br from-coral/40 to-coral/30
                         backdrop-blur-md backdrop-saturate-150
                         border border-coral/20
                         text-background text-sm lg:text-base
                         transition-all duration-300
                         shadow-[0_0_15px_rgba(0,0,0,0.1)]
                         hover:shadow-[0_0_20px_rgba(0,0,0,0.15)]
                         relative
                         before:absolute before:inset-0 
                         before:bg-gradient-to-br before:from-coral/10 before:to-transparent 
                         before:rounded-lg before:opacity-0 before:transition-opacity
                         hover:before:opacity-100"
            >
              View Projects
              <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Mouse follower */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="fixed w-20 h-20 rounded-full 
                     bg-gradient-to-r from-coral/10 to-coral/5 
                     mix-blend-screen backdrop-blur-md"
          animate={{
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
          }}
          transition={{
            type: "spring",
            damping: 15,
            stiffness: 150,
            mass: 0.1,
          }}
        >
          <div
            className="absolute inset-0 rounded-full 
                          bg-gradient-to-r from-coral/20 to-transparent 
                          opacity-50 blur-sm"
          />
        </motion.div>
      </div>
    </div>
  );
}
