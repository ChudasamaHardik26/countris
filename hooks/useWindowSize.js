import { useState,useEffect } from "react";
export default function useWindowSize()
{
    const [useWindowSize,setuseWindowSize] = useState({
        height:window.innerHeight,
        width:window.innerWidth
});
  useEffect(()=>
  {
      window.addEventListener("resize",() => {
        setuseWindowSize({height:window.innerHeight,width:window.innerWidth})
      });
  },[]);
  return useWindowSize
}
