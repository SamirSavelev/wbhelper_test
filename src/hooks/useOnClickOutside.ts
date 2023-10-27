import { MouseEventHandler, RefObject, useEffect } from 'react';

export function useOnClickOutside(
  ref: RefObject<HTMLDivElement | HTMLButtonElement | null>,
  handler: MouseEventHandler<HTMLButtonElement>
) {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
