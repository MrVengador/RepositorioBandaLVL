import { Link } from "react-router-dom";

const MarchaCard = ({ id, titulo, autor, year }) => {
    return (
        <article className="card marcha-card h-100 shadow-sm border-info position-relative">
            <div className="card-body d-flex flex-column">
                <h3 className="card-title">{titulo}</h3>

                <p className="card-text mb-1">
                    <small className="text-muted">Autor:</small> {autor}
                </p>

                <p className="card-text mb-3">
                    <small className="text-muted">Año:</small> {year}
                </p>

                <div className="mt-auto" />

                {/* Link correcto */}
                <Link
                    to={`/marchas/${id}`}
                    className="stretched-link"
                    aria-label={`Ver detalles de ${titulo}`}
                />
            </div>
        </article>
    );
};

export default MarchaCard;
