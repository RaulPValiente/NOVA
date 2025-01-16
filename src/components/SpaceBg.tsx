import React, { useEffect, useRef, useState } from 'react';

const SpaceBg = () => {
  const canvasRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const STAR_COLOR = '#fff';
    const STAR_SIZE = 3;
    const STAR_MIN_SCALE = 0.2;
    const OVERFLOW_THRESHOLD = 50;
    const STAR_COUNT = (window.innerWidth + window.innerHeight) / 10;

    let scale = 1; // device pixel ratio
    let width;
    let height;

    let stars = [];
    let pointerX = null;
    let pointerY = null;

    let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };
    let touchInput = false;

    const generate = () => {
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: 0,
          y: 0,
          z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE),
          alpha: 0.5 + 0.5 * Math.random(), // Precomputar opacidad
        });
      }
    };

    const placeStar = (star) => {
      star.x = Math.random() * width;
      star.y = Math.random() * height;
    };

    const recycleStar = (star) => {
      let direction = 'z';
      let vx = Math.abs(velocity.x);
      let vy = Math.abs(velocity.y);

      if (vx > 1 || vy > 1) {
        let axis;

        if (vx > vy) {
          axis = Math.random() < vx / (vx + vy) ? 'h' : 'v';
        } else {
          axis = Math.random() < vy / (vx + vy) ? 'v' : 'h';
        }

        if (axis === 'h') {
          direction = velocity.x > 0 ? 'l' : 'r';
        } else {
          direction = velocity.y > 0 ? 't' : 'b';
        }
      }

      star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE);

      if (direction === 'z') {
        star.z = 0.1;
        star.x = Math.random() * width;
        star.y = Math.random() * height;
      } else if (direction === 'l') {
        star.x = -OVERFLOW_THRESHOLD;
        star.y = height * Math.random();
      } else if (direction === 'r') {
        star.x = width + OVERFLOW_THRESHOLD;
        star.y = height * Math.random();
      } else if (direction === 't') {
        star.x = width * Math.random();
        star.y = -OVERFLOW_THRESHOLD;
      } else if (direction === 'b') {
        star.x = width * Math.random();
        star.y = height + OVERFLOW_THRESHOLD;
      }
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      width = canvas.width;
      height = canvas.height;

      stars.forEach(placeStar);
    };

    const step = () => {
      context.clearRect(0, 0, width, height);
      update();
      render();
      requestAnimationFrame(step);
    };

    const update = () => {
      velocity.tx *= 0.96;
      velocity.ty *= 0.96;

      velocity.x += (velocity.tx - velocity.x) * 0.5;
      velocity.y += (velocity.ty - velocity.y) * 0.5;

      velocity.x = Math.min(Math.max(velocity.x, -5), 5); // Limitar entre -5 y 5
      velocity.y = Math.min(Math.max(velocity.y, -5), 5);

      stars.forEach((star) => {
        star.x += velocity.x * star.z;
        star.y += velocity.y * star.z;

        star.x += (star.x - width / 2) * velocity.z * star.z;
        star.y += (star.y - height / 2) * velocity.z * star.z;
        star.z += velocity.z;

        if (
          star.x < -OVERFLOW_THRESHOLD ||
          star.x > width + OVERFLOW_THRESHOLD ||
          star.y < -OVERFLOW_THRESHOLD ||
          star.y > height + OVERFLOW_THRESHOLD
        ) {
          recycleStar(star);
        }
      });
    };

    const render = () => {
      stars.forEach((star) => {
        context.beginPath();
        context.lineCap = 'round';
        context.lineWidth = STAR_SIZE * star.z * scale;
        context.globalAlpha = star.alpha;
        context.strokeStyle = STAR_COLOR;

        context.moveTo(star.x, star.y);
        context.lineTo(star.x + velocity.x * 2, star.y + velocity.y * 2);
        context.stroke();
      });
    };

    const movePointer = (x, y) => {
      if (typeof pointerX === 'number' && typeof pointerY === 'number') {
        let ox = x - pointerX;
        let oy = y - pointerY;

        velocity.tx = velocity.tx + (ox / 16) * scale * (touchInput ? 1 : -1);
        velocity.ty = velocity.ty + (oy / 16) * scale * (touchInput ? 1 : -1);
      }

      pointerX = x;
      pointerY = y;
    };

    const debounceResize = () => {
      let resizeTimeout;
      return () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(resize, 200);
      };
    };

    const onMouseMove = (event) => {
      touchInput = false;
      movePointer(event.clientX, event.clientY);
    };

    const onTouchMove = (event) => {
      touchInput = true;
      movePointer(event.touches[0].clientX, event.touches[0].clientY, true);
      event.preventDefault();
    };

    const onMouseLeave = () => {
      pointerX = null;
      pointerY = null;
    };

    window.addEventListener('resize', debounceResize());
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onMouseLeave);
    document.addEventListener('mouseleave', onMouseLeave);

    generate();
    resize();
    step();
    setIsLoaded(true); // Indicar que la animación está lista

    return () => {
      window.removeEventListener('resize', debounceResize());
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onMouseLeave);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        opacity: isLoaded ? 1 : 0,
        visibility: isLoaded ? 'visible' : 'hidden',
        transition: 'opacity 0.5s ease',
      }}
      className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none"
    ></canvas>
  );
};

export default SpaceBg;
