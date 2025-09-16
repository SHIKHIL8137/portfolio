import React, { useEffect, useRef, useState, lazy, Suspense } from "react";

interface LazySectionProps {
  importFunc: () => Promise<{ default: React.ComponentType<any> }>;
  fallback?: React.ReactNode;
}

const LazySection: React.FC<LazySectionProps> = ({ importFunc, fallback }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [Component, setComponent] = useState<React.LazyExoticComponent<React.ComponentType<any>> | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && !Component) {
      const LazyComp = lazy(importFunc);
      setComponent(LazyComp); // Removed unnecessary arrow function wrapper
    }
  }, [isVisible, Component, importFunc]);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}
    >
      {Component ? (
        <Suspense fallback={fallback || <h2>Loading section...</h2>}>
          <Component />
        </Suspense>
      ) : (
        fallback || <h2>Preparing section...</h2>
      )}
    </div>
  );
};

export default LazySection;