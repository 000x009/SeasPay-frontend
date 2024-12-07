import { useEffect, useRef } from "react";

import "./InfiniteScroll.css";

export function InfiniteScroll({
    children,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
}) {
    const loader = useRef(null);

    useEffect(() => {
        function handleIntersection(entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting && (!isFetchingNextPage && !isLoading)) {
                    fetchNextPage();
                }
            })
        }

        const options = {
            root: null,
            rootMargin: '100px',
            threshold: 0
        }
        const observer = new IntersectionObserver(handleIntersection, options);

        if (loader.current) {
            observer.observe(loader.current);
        }

        return () => {
            if (loader.current) {
                observer.disconnect();
            }
        }
    }, [isLoading, isFetchingNextPage, fetchNextPage]);

    return (
        <>
            {children}

            <div ref={loader} id="loader"></div>
        </>
    )
}