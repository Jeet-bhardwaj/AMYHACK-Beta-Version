import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import React, { useRef } from "react";

const MovingStars = () => {
    const starsRef = useRef<any>();

    useFrame(({ clock }) => {
        if (starsRef.current) {
            starsRef.current.rotation.y = clock.getElapsedTime() * 0.05; // Slow rotation effect
        }
    });

    return (
        <Stars
            ref={starsRef}
            radius={150} // Controls the spread of stars
            depth={50} // Depth of field effect
            count={5000} // Number of stars
            factor={4} // Star size
            saturation={0}
            fade
            speed={1} // Speed of movement
        />
    );
};

const SpaceBackground = () => {
    return (
        <Canvas className="absolute inset-0 z-0">
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} />
            <MovingStars />
        </Canvas>
    );
};

export default SpaceBackground;
