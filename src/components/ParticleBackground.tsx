import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let time = 0;
        let animationFrameId: number;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Wave parameters
        const lines = 12; // Number of "energy" lines

        const draw = () => {
            if (!ctx) return;
            // Clear but keep a tiny bit of trail for softness?? No, full clear for crisp video look.
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // To be safe, fill black if dark mode, or handled by CSS background. 
            // We'll let CSS handle the base BG color.

            const width = canvas.width;
            const height = canvas.height;

            // Check theme for colors
            const isLight = document.documentElement.getAttribute('data-theme') === 'light';

            // Neon Palette
            const color1 = isLight ? 'rgba(0, 153, 170, ' : 'rgba(0, 243, 255, '; // Cyan
            const color2 = isLight ? 'rgba(153, 0, 204, ' : 'rgba(212, 0, 255, '; // Purple
            const color3 = isLight ? 'rgba(0, 68, 170, ' : 'rgba(0, 102, 255, '; // Blue

            // Create flowing waves
            for (let i = 0; i < lines; i++) {
                ctx.beginPath();
                ctx.lineWidth = i % 2 === 0 ? 300 : 150; // Massively thick lines for "aura" look, not wireframe
                // Blur essential for aura
                ctx.shadowBlur = 60;
                ctx.shadowColor = (i % 3 === 0) ? '#00eaff' : (i % 3 === 1) ? '#d400ff' : '#0066ff';

                // Color selection based on index
                let rColor = color1;
                if (i % 3 === 1) rColor = color2;
                if (i % 3 === 2) rColor = color3;

                // Opacity pulses slightly
                const opacity = 0.15 + Math.sin(time * 0.5 + i) * 0.05;
                ctx.strokeStyle = rColor + opacity + ')';

                // Draw sine wave
                for (let x = -100; x < width + 100; x += 50) {
                    // Complex wave function
                    const yOffset = height / 2;
                    // Intertwine waves
                    const frequency = 0.002 + (i * 0.0005);
                    const amplitude = height * 0.25;
                    const flow = time * (0.8 + i * 0.1);

                    const y = yOffset +
                        Math.sin(x * frequency + flow) * amplitude +
                        Math.cos(x * frequency * 0.5 - flow) * (amplitude * 0.5);

                    if (x === -100) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }
                ctx.stroke();
            }

            // Add subtle floating particles on top for "dust/energy mites"
            // (Optional, keeps the scene alive)

            time += 0.01;
            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        const observer = new MutationObserver(() => {
            // Theme changed, next frame picks it up
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
            observer.disconnect();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none transition-opacity duration-1000"
        />
    );
};

export default ParticleBackground;
