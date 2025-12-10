import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationFrameId: number;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.size = Math.random() * 2 + 0.5; // Slightly larger for softness
                this.speedX = Math.random() * 0.2 - 0.1; // Slower speed
                this.speedY = Math.random() * 0.2 - 0.1;
                this.opacity = Math.random() * 0.3 + 0.05; // Dimmer opacity
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas!.width) this.x = 0;
                if (this.x < 0) this.x = canvas!.width;
                if (this.y > canvas!.height) this.y = 0;
                if (this.y < 0) this.y = canvas!.height;
            }

            draw() {
                if (!ctx) return;
                const isLight = document.documentElement.getAttribute('data-theme') === 'light';
                ctx.fillStyle = isLight
                    ? `rgba(0, 100, 200, ${this.opacity * 0.8})` // Darker blue for light mode
                    : `rgba(0, 243, 255, ${this.opacity})`; // Cyan for dark mode

                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < 60; i++) { // Reduced count for cleaner look
                particles.push(new Particle());
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        // Re-init on theme change to update colors immediately (optional optimization)
        const observer = new MutationObserver(() => {
            // Just rely on draw loop for color check, but could force redraw here
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
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none',
            }}
        />
    );
};

export default ParticleBackground;
