'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import 'animate.css';


export const Aos = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return null
}
