import { useEffect, useState, useRef } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

function parseValue(str) {
  const num = parseFloat(str.replace(/[^0-9.]/g, ''));
  const prefix = str.match(/^[^0-9]*/)?.[0] || '';
  const suffix = str.match(/[^0-9.]+$/)?.[0] || '';
  return { num, prefix, suffix };
}

export default function AnimatedCounter({ value, duration = 1800 }) {
  const [ref, isVisible] = useIntersectionObserver();
  const [display, setDisplay] = useState('0');
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    const { num, prefix, suffix } = parseValue(value);
    if (isNaN(num)) { setDisplay(value); return; }

    const start = 0;
    const startTime = performance.now();

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (num - start) * eased);
      setDisplay(`${prefix}${current}${suffix}`);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [isVisible, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {isVisible ? display : '0'}
    </span>
  );
}
