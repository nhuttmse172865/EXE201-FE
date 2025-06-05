import React, { useState, useEffect, useRef } from 'react';

function useIsInViewport(elementRef, options = {}) {
    const [isInViewport, setIsInViewport] = useState(false);
    const observerRef = useRef(null);
    useEffect(() => {
        if (!elementRef.current) {
            return;
        }
        observerRef.current = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                setIsInViewport(entry.isIntersecting);
            });
        }, options);
        observerRef.current.observe(elementRef.current);
        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [elementRef, options]);

    return isInViewport;
}

export default useIsInViewport;