 import { useState, useRef } from "react";
 
 export const useTimer = (maxTime: number)=> {
    const [time, setTime] = useState(maxTime);
    const interval = useRef<any>(null);

    const startTimer = ()=> {
      setTime(maxTime);
      interval.current = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
     
    }

    const clearTimer = ()=> {
      clearInterval(interval.current);
    }

    return {
      time,
      startTimer,
      clearTimer
    }
   
  }