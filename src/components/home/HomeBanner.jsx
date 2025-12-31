import useHomeBanner from "./useHomeBanner.js";
import "./home.css";

const HomeBanner = ({ slides }) => {
    const { currentSlide } = useHomeBanner(slides, 6000);

    if (!currentSlide) return null;

    return (
        <section className="home-carousel">
            <div className="carousel-overlay">
                <h1>{currentSlide.title}</h1>
                {currentSlide.subtitle && <p>{currentSlide.subtitle}</p>}
            </div>

            {slides.map((slide, index) => (
                <img
                    key={index}
                    src={slide.image}
                    alt={slide.title}
                    className={`carousel-img ${slide === currentSlide ? "active" : ""
                        }`}
                />
            ))}
        </section>

    );
};

export default HomeBanner;
