// src/components/GradientSection.tsx

import React, { useRef, useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
// Import Github icon along with Heart
import { Heart, HelpCircle, Github } from "lucide-react";

// No lerp needed now, using physics simulation

const GradientSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    // Target position (mouse cursor)
    const targetX = useRef(0);
    const targetY = useRef(0);
    // Current position of the gradient center
    const currentX = useRef(0);
    const currentY = useRef(0);
    // Velocity of the gradient center
    const velocityX = useRef(0);
    const velocityY = useRef(0);
    // Ref for requestAnimationFrame ID
    const rafId = useRef<number | null>(null);
    // State to ensure initial measurement before animation starts
    const [isMeasured, setIsMeasured] = useState(false);

    // --- Physics Configuration (Using your values) ---
    const stiffness = 0.001;
    const damping = 0.5;
    const mass = 20;
    const precision = 0.01;

    // Initialize positions (memoized)
    const initializePositions = useCallback(() => {
        const section = sectionRef.current;
        if (!section) return;

        const initialX = section.offsetWidth / 2;
        const initialY = section.offsetHeight / 2;

        targetX.current = initialX;
        targetY.current = initialY;
        currentX.current = initialX;
        currentY.current = initialY;
        velocityX.current = 0; // Start with zero velocity
        velocityY.current = 0;

        section.style.setProperty("--mouse-x", `${currentX.current.toFixed(2)}px`);
        section.style.setProperty("--mouse-y", `${currentY.current.toFixed(2)}px`);
        setIsMeasured(true);
    }, []);

    // Mouse move handler (memoized)
    const handleMouseMove = useCallback((event: MouseEvent) => {
        const section = sectionRef.current;
        if (!section) return;
        const rect = section.getBoundingClientRect();
        targetX.current = event.clientX - rect.left;
        targetY.current = event.clientY - rect.top;
    }, []);

    // Animation loop effect
    useEffect(() => {
        if (!isMeasured) {
            initializePositions();
        }

        const section = sectionRef.current;
        if (!section || !isMeasured) return;

        let isActive = true; // Flag to control animation loop continuation

        const animate = () => {
            if (!isActive) return; // Stop if flagged

            // --- Physics Calculation ---
            const displacementX = targetX.current - currentX.current;
            const displacementY = targetY.current - currentY.current;
            const springForceX = stiffness * displacementX;
            const springForceY = stiffness * displacementY;
            const dampingForceX = damping * velocityX.current;
            const dampingForceY = damping * velocityY.current;
            const forceX = springForceX - dampingForceX;
            const forceY = springForceY - dampingForceY;
            const accelerationX = forceX / mass;
            const accelerationY = forceY / mass;
            velocityX.current += accelerationX;
            velocityY.current += accelerationY;
            currentX.current += velocityX.current;
            currentY.current += velocityY.current;
            // --- End Physics ---

            // Update CSS variables
            section.style.setProperty("--mouse-x", `${currentX.current.toFixed(2)}px`);
            section.style.setProperty("--mouse-y", `${currentY.current.toFixed(2)}px`);

            // Check if the animation should stop
            const isMoving = Math.abs(velocityX.current) > precision || Math.abs(velocityY.current) > precision;
            const isDisplaced = Math.abs(displacementX) > precision || Math.abs(displacementY) > precision;

            if (!isMoving && !isDisplaced) {
                // Snap to final position and stop animation temporarily
                currentX.current = targetX.current;
                currentY.current = targetY.current;
                velocityX.current = 0;
                velocityY.current = 0;
                section.style.setProperty("--mouse-x", `${currentX.current.toFixed(2)}px`);
                section.style.setProperty("--mouse-y", `${currentY.current.toFixed(2)}px`);
            } else {
                // Continue the loop
                rafId.current = requestAnimationFrame(animate);
            }
        };

        // Wake up handler
        const wakeUpAnimation = () => {
            if (rafId.current) cancelAnimationFrame(rafId.current);
            isActive = true;
            rafId.current = requestAnimationFrame(animate);
        };

        // Event Listeners
        section.addEventListener("mousemove", handleMouseMove);
        section.addEventListener("mousemove", wakeUpAnimation, { once: false });

        // Start animation
        wakeUpAnimation();

        // Cleanup function
        return () => {
            isActive = false;
            section.removeEventListener("mousemove", handleMouseMove);
            section.removeEventListener("mousemove", wakeUpAnimation);
            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }
        };
    }, [isMeasured, stiffness, damping, mass, precision, handleMouseMove, initializePositions]);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 animate-hue-rotate" // Hue rotate applied
            style={{
                background: `radial-gradient(circle 2000px at var(--mouse-x, 50%) var(--mouse-y, 50%),rgb(115, 78, 204),rgb(120, 22, 129),rgb(214, 140, 13))`, // Your gradient colors/size
            }}
        >
            {/* Content Area */}
            <div className="relative z-10 text-center max-w-3xl mx-auto">
                {/* Your Text Content */}
                <p className="text-xl md:text-2xl leading-relaxed text-white/90 mb-4 font-medium">
                    The open source movement fuels global economies, educates and empowers billions, and sustains our digital society...
                </p>
                <p className="text-lg md:text-2xl text-white font-semibold mb-10">
                    ... but this future is not guaranteed.
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-md">
                    The Open Source Endowment
                </h1>
                <p className="text-lg md:text-xl text-white/80 mb-10">
                    A community-driven investment in the lasting resilience of the most frictionless, collaborative, and impactful institution the world has ever known.
                </p>

                {/* --- Icon/Button Wrapper --- */}
                <div className="flex items-center justify-center gap-x-6"> {/* Adjust gap if needed */}

                    {/* GitHub Icon Link (LEFT) */}
                    <a
                        href="https://github.com/your-org/your-repo" // <-- *** REPLACE with your actual GitHub URL ***
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View source code on GitHub"
                        className="text-white/70 hover:text-white transition-colors duration-200 ease-in-out p-2 rounded-full hover:bg-white/10"
                    >
                        <Github className="h-8 w-8" /> {/* Adjust size if needed */}
                    </a>

                    {/* Become a Member Button (CENTER) */}
                    <Button
                        size="lg"
                        className="text-lg font-medium px-10 py-8 rounded-full bg-white/90 text-black hover:bg-white transition-all shadow-xl hover:scale-105 duration-300"
                    >
                        <Heart className="mr-2 h-6 w-6 text-pink-500" />
                        Become a Member
                    </Button>

                    {/* Help Icon Link (RIGHT) */}
                    <a
                        href="/about" // <-- *** REPLACE with your actual info page URL (e.g., /about, /info) ***
                        aria-label="Learn more about the endowment" // For accessibility
                        className="text-white/70 hover:text-white transition-colors duration-200 ease-in-out p-2 rounded-full hover:bg-white/10" // Style the link
                    >
                        <HelpCircle className="h-8 w-8" /> {/* Adjust size as needed */}
                    </a>

                </div>
                {/* --- End Icon/Button Wrapper --- */}
            </div>
        </section>
    );
};

export default GradientSection;
