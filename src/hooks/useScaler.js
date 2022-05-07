// import { useEffect, useState } from "react";

// export default function useScaler(projectRef) {
//   const [scale, setScale] = useState(1);

//   const debounce = (f, ms = 0) => {
//     let isCooldown = false;
//     return () => {
//       if (isCooldown) return;
//       f.apply(this, arguments);
//       isCooldown = true;
//       setTimeout(() => (isCooldown = false), ms);
//     };
//   };

//   useEffect(() => {
//     const debouncedHandleResize = debounce(function handleResize() {
//       let elemWidth = projectRef.current.offsetWidth;
//       let windowWidth = window.innerWidth;

//       let currentScale = windowWidth / elemWidth;
//       if (currentScale <= 1) {
//         setScale(currentScale);
//       }
//     });

//     window.addEventListener("resize", debouncedHandleResize);

//     return () => {
//       window.removeEventListener("resize", debouncedHandleResize);
//     };
//   }, [scale]);

//   return { scale };
// }
