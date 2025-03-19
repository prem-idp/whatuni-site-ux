"use client";
import React, { useEffect, useRef } from "react";

const RippleEffectComponent = () => {
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {

    const onClick = () => {
      btnRef.current?.classList.remove("animated");
      setTimeout(() => {
        btnRef.current?.classList.add("animated");
      }, 1000);
    };
    if (btnRef.current) {
      btnRef.current.addEventListener("mouseup", onClick);
    }
    const remRef =  btnRef.current;
    return () => {
      if (remRef) {
        remRef.removeEventListener("mouseup", onClick);
      }
    };
  }, []); 

  return (
    <button ref={btnRef} type="button" className="btn btn-primary my-4">
      View more
    </button>
  );
};

export default RippleEffectComponent;


// .btn.animated::before{
//   border-radius: 50%;
//   animation: ripple_btn 100ms linear forwards;
// }
// @keyframes ripple{
//   from{
//     transform: scale(0);
//   }
//   to{
//     transform: scale(6);
//     opacity: 0;
//   }
// }