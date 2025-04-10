import { useRef } from 'react';

export const useHorizontalScroll = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const animationFrameId = useRef<number | null>(null);

  const handleStart = (clientX: number) => {
    isDragging.current = true;
    startX.current = clientX - wrapperRef.current!.offsetLeft;
    scrollLeft.current = wrapperRef.current!.scrollLeft;
    wrapperRef.current!.style.cursor = 'grabbing';
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;

    if (animationFrameId.current !== null) {
      cancelAnimationFrame(animationFrameId.current);
    }
    animationFrameId.current = requestAnimationFrame(() => {
      const x = clientX - wrapperRef.current!.offsetLeft;
      const walk = (x - startX.current) * 1; // 드래그 속도 조정
      wrapperRef.current!.scrollLeft = scrollLeft.current - walk;
    });
  };

  const handleEnd = () => {
    isDragging.current = false;
    wrapperRef.current!.style.cursor = 'grab';
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) =>
    handleStart(e.pageX);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) =>
    handleMove(e.pageX);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) =>
    handleStart(e.touches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) =>
    handleMove(e.touches[0].clientX);

  return {
    wrapperRef,
    handleMouseDown,
    handleMouseMove,
    handleTouchStart,
    handleTouchMove,
    handleEnd,
  };
};
