// import { useEffect, useRef } from "react";

// export const WaveBackground = () => {
//     const canvasRef = useRef(null);
//     const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext("2d");

//         let width = window.innerWidth;
//         let height = window.innerHeight;
//         const DPR = Math.min(window.devicePixelRatio || 1, 1.5);

//         const resize = () => {
//             width = window.innerWidth;
//             height = window.innerHeight;
//             canvas.width = width * DPR;
//             canvas.height = height * DPR;
//             canvas.style.width = width + "px";
//             canvas.style.height = height + "px";
//             ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
//         };
//         resize();
//         window.addEventListener("resize", resize);

//         window.addEventListener("mousemove", (e) => {
//             mouse.current.x = e.clientX;
//             mouse.current.y = e.clientY;
//         });

//         const layers = [
//             { freq: 0.008, amp: 32, speed: 0.3, opacity: 0.18, offset: Math.random() * 1000, sway: Math.random() * 2 },
//             { freq: 0.012, amp: 26, speed: 0.5, opacity: 0.16, offset: Math.random() * 1000, sway: Math.random() * 2 },
//             { freq: 0.016, amp: 20, speed: 0.7, opacity: 0.14, offset: Math.random() * 1000, sway: Math.random() * 2 },
//             { freq: 0.02, amp: 16, speed: 0.9, opacity: 0.12, offset: Math.random() * 1000, sway: Math.random() * 2 }
//         ];

//         let time = 0;

//         // Persistent mouse influence per layer per x
//         const influenceArrays = layers.map(() => new Float32Array(width));

//         const draw = () => {
//             ctx.clearRect(0, 0, width, height);

//             // Background
//             ctx.fillStyle = "#05070c";
//             ctx.fillRect(0, 0, width, height);

//             ctx.globalCompositeOperation = "lighter";

//             layers.forEach((layer, idx) => {
//                 ctx.beginPath();
//                 ctx.strokeStyle = `rgba(90,140,255,${layer.opacity})`;
//                 ctx.lineWidth = 2.8;

//                 const influenceArray = influenceArrays[idx];

//                 // Decay influence slowly
//                 for (let x = 0; x < width; x += 2) {
//                     influenceArray[x] *= 0.97;
//                 }

//                 // Update influence at mouse position
//                 const radius = 120;
//                 const start = Math.max(0, mouse.current.x - radius);
//                 const end = Math.min(width, mouse.current.x + radius);
//                 for (let x = start; x <= end; x += 2) {
//                     const dx = x - mouse.current.x;
//                     const falloff = Math.exp(-(dx * dx) / (2 * 50 * 50)); // Gaussian
//                     influenceArray[x] = Math.max(influenceArray[x], falloff);
//                 }

//                 for (let x = 0; x <= width; x += 2) {
//                     // Independent vertical sway
//                     const sway = Math.sin((x * 0.01) + layer.offset + time * layer.speed) * 4 +
//                         Math.sin(time * 0.3 + idx) * layer.sway;

//                     // Mouse persistent influence
//                     const influence = influenceArray[x] * 70;

//                     // Base wave
//                     const baseWave = Math.sin(x * layer.freq + time * layer.speed) * layer.amp;

//                     // Y position
//                     const y = height / 2 + baseWave + sway + influence * Math.sin((x + time * 5) * 0.02 + idx);

//                     if (x === 0) ctx.moveTo(x, y);
//                     else ctx.lineTo(x, y);
//                 }

//                 ctx.shadowBlur = 50;
//                 ctx.shadowColor = "rgba(90,140,255,0.45)";
//                 ctx.stroke();
//             });

//             ctx.globalCompositeOperation = "source-over";

//             time += 0.014;
//             requestAnimationFrame(draw);
//         };

//         draw();

//         return () => {
//             window.removeEventListener("resize", resize);
//         };
//     }, []);

//     return (
//         <canvas
//             ref={canvasRef}
//             style={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 width: "100%",
//                 height: "100%",
//                 zIndex: 0
//             }}
//         />
//     );
// };






// Better





import { useEffect, useRef } from "react";

export const WaveBackground = () => {
    const canvasRef = useRef(null);
    const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let width = window.innerWidth;
        let height = window.innerHeight;
        const DPR = Math.min(window.devicePixelRatio || 1, 1.5);

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * DPR;
            canvas.height = height * DPR;
            canvas.style.width = width + "px";
            canvas.style.height = height + "px";
            ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
        };
        resize();
        window.addEventListener("resize", resize);

        window.addEventListener("mousemove", (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        });

        const layers = [
            { freq: 0.008, amp: 36, speed: 0.3, opacity: 0.18, offset: Math.random() * 1000, sway: Math.random() * 2 },
            { freq: 0.012, amp: 30, speed: 0.5, opacity: 0.16, offset: Math.random() * 1000, sway: Math.random() * 2 },
            { freq: 0.016, amp: 24, speed: 0.7, opacity: 0.14, offset: Math.random() * 1000, sway: Math.random() * 2 },
            { freq: 0.02, amp: 20, speed: 0.9, opacity: 0.12, offset: Math.random() * 1000, sway: Math.random() * 2 }
        ];

        let time = 0;
        const influenceArrays = layers.map(() => new Float32Array(width));

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // Dark background
            ctx.fillStyle = "#05070c";
            ctx.fillRect(0, 0, width, height);

            ctx.globalCompositeOperation = "lighter";

            layers.forEach((layer, idx) => {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(90,140,255,${layer.opacity})`;

                const influenceArray = influenceArrays[idx];

                // Slow decay of influence
                for (let x = 0; x < width; x += 2) influenceArray[x] *= 0.97;

                // Update influence at mouse position
                const radius = 140; // slightly bigger area
                const start = Math.max(0, mouse.current.x - radius);
                const end = Math.min(width, mouse.current.x + radius);
                for (let x = start; x <= end; x += 2) {
                    const dx = x - mouse.current.x;
                    const falloff = Math.exp(-(dx * dx) / (2 * 50 * 50));
                    influenceArray[x] = Math.max(influenceArray[x], falloff);
                }

                // Draw wave points, spaced further apart
                for (let x = 0; x <= width; x += 3) { // increased spacing
                    const sway = Math.sin((x * 0.01) + layer.offset + time * layer.speed) * 5 +
                        Math.sin(time * 0.3 + idx) * layer.sway;

                    const influence = influenceArray[x] * 80;
                    const baseWave = Math.sin(x * layer.freq + time * layer.speed) * layer.amp;

                    const y = height / 2 + baseWave + sway + influence * Math.sin((x + time * 5) * 0.02 + idx);

                    // Slightly larger base line thickness
                    ctx.lineWidth = 3;

                    if (x === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }

                ctx.shadowBlur = 50;
                ctx.shadowColor = "rgba(90,140,255,0.45)";
                ctx.stroke();
            });

            ctx.globalCompositeOperation = "source-over";
            time += 0.014;
            requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0
            }}
        />
    );
};

