import React, { useEffect, useRef, useState } from 'react';
import './Cursor.css';

export const Cursor: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const clickTimeout = useRef<number | undefined>(undefined);
  const [clicking, setClicking] = useState(false);
  const [overDarkSurface, setOverDarkSurface] = useState(false);
  const [overLightSurface, setOverLightSurface] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      el.style.left = e.clientX + 'px';
      el.style.top = e.clientY + 'px';

      let element = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
      let darkSurface = false;
      let lightSurface = false;

      while (element && element !== document.body) {
        const foreground = window.getComputedStyle(element).color;
        const foregroundMatch = foreground.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
        const textElement = element.matches('h1, h2, h3, h4, h5, h6, p, a, button, .skill-label, .logo');

        if (textElement && foregroundMatch) {
          const foregroundLuminance = (Number(foregroundMatch[1]) * 299 + Number(foregroundMatch[2]) * 587 + Number(foregroundMatch[3]) * 114) / 1000;
          if (foregroundLuminance > 180) {
            lightSurface = true;
            break;
          }
        }

        const background = window.getComputedStyle(element).backgroundColor;
        const match = background.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
        const alpha = match?.[4] === undefined ? 1 : Number(match[4]);

        if (match && alpha > 0.5) {
          const luminance = (Number(match[1]) * 299 + Number(match[2]) * 587 + Number(match[3]) * 114) / 1000;
          darkSurface = luminance < 100;
          lightSurface = luminance > 180;
          break;
        }

        if (element.matches('.avatar-image, .avatar-ring') || element.closest('.logo')) {
          darkSurface = true;
          break;
        }

        element = element.parentElement;
      }

      setOverDarkSurface((current) => current === darkSurface ? current : darkSurface);
      setOverLightSurface((current) => current === lightSurface ? current : lightSurface);
    };

    const onClick = () => {
      setClicking(true);
      window.clearTimeout(clickTimeout.current);
      clickTimeout.current = window.setTimeout(() => setClicking(false), 320);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('click', onClick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('click', onClick);
      window.clearTimeout(clickTimeout.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`custom-cursor${clicking ? ' clicking' : ''}${overDarkSurface ? ' light' : ''}${overLightSurface ? ' on-light' : ''}`}
      aria-hidden
    >
      <div className="cursor-shape">
        <span className="corner tl" />
        <span className="corner tr" />
        <span className="corner bl" />
        <span className="corner br" />

        <div className="cross" />
        <div className="center-dot" />
      </div>
    </div>
  );
};

export default Cursor;
