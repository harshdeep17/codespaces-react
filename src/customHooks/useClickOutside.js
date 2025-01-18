
import { useState, useRef, useEffect } from 'react'

export function useClickOutside(callback) {
  // your code here
  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) =>{
      if(ref.current && !ref.current.contains(event.target)){
        
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    }
  }, []);

  return ref;
}