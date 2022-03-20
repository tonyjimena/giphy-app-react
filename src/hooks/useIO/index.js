import { useRef, useEffect, useState } from "react";

export const useIO = (options = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0
}) => {

  const containerRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);

    let containerRefCopy = containerRef.current;

    if (containerRefCopy) observer.observe(containerRefCopy);

    return () => {
      if (containerRefCopy) observer.unobserve(containerRefCopy);
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};
