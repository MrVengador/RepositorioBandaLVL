import { useEffect, useState } from "react";

const useHomeBanner = (slides = [], interval = 5000) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!slides || slides.length === 0) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
            );
        }, interval);

        return () => clearInterval(timer);
    }, [slides, interval]);

    const currentSlide =
        slides && slides.length > 0 ? slides[currentIndex] : null;

    return { currentSlide, currentIndex };
};

export default useHomeBanner;
