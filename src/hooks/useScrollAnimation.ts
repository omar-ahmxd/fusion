import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, AnimationControls } from 'framer-motion';

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export const useScrollAnimation = (options?: UseScrollAnimationOptions) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: options?.threshold || 0.1,
    triggerOnce: options?.triggerOnce !== false,
    rootMargin: options?.rootMargin || '0px',
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!options?.triggerOnce) {
      controls.start('hidden');
    }
  }, [controls, inView, options?.triggerOnce]);

  return { ref, controls, inView };
};

export const useParallax = (offset: number = 50) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const scrolled = window.scrollY;
      const rate = scrolled * (offset / 100) * -1;
      ref.current.style.transform = `translateY(${rate}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset]);

  return ref;
};