// "use client";
// import { useEffect } from "react";
// import Lenis from "@studio-freight/lenis";

// export default function SmoothScroll() {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.5, // speed of scroll
//       smooth: true,  // enable smooth scroll
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     return () => {
//       // cleanup if component unmounts
//       lenis.destroy();
//     };
//   }, []);

//   return null; // nothing to render
// }