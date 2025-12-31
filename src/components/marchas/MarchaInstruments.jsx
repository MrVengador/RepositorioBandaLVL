import { useState } from "react";

const LABELS = {
    general: "General",
    caja: "Caja",
    pifano: "Pífano",
    clarin: "Clarin",
    bateria: "Batería",
    instrumental: "Instrumental"
};

const MarchaInstruments = ({ instrumentos }) => {
    const [active, setActive] = useState("general");

    const videoUrl = instrumentos?.[active];

    return (
        <div className="marcha-instruments shadow-sm">
            {/* Selector */}
            <div className="instrument-selector">
                {Object.entries(LABELS).map(([key, label]) => (
                    <button
                        key={key}
                        className={`instrument-btn ${active === key ? "active" : ""}`}
                        onClick={() => setActive(key)}
                        disabled={!instrumentos?.[key]}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {/* Video */}
            <div className="instrument-video mx-5 my-3">
                {videoUrl ? (
                    <div className="ratio ratio-16x9">
                        <iframe
                            src={videoUrl}
                            title={active}
                            allowFullScreen
                        />
                    </div>
                ) : (
                    <div className="video-empty">
                        <p>No hay video disponible para este instrumento.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MarchaInstruments;
