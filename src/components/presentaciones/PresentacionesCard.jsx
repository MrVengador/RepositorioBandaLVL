import "../../styles/cards/presentacionCard.css";

const PresentacionCard = ({ title, date, cover, driveUrl, type }) => {
    return (
        <article className="card-presentacion" onClick={() => window.open(driveUrl, "_blank")}>
            {/* Imagen de fondo */}
            <div
                className="card-image-container"
                style={{ backgroundImage: `url(${cover})` }}
            ></div>

            {/* Categoría / Etiqueta fija */}
            <div className="category-tag"> {type} </div>

            {/* Contenido de texto */}
            <div className="heading-container">
                {title}
                <div className="date-info">
                    Fecha: <span className="date-text">{date}</span>
                </div>
            </div>
        </article>
    );
};

export default PresentacionCard;