import { useParams, Navigate } from "react-router-dom";
import { useMarchasSource } from "../data/useMarchasSource";
import MarchaInstruments from "../components/marchas/MarchaInstruments";
import PageTitle from "../components/common/PageTitle";

const MarchaDetail = () => {
    const { slug } = useParams();
    const { marchas, loading } = useMarchasSource();

    if (loading) {
        return (
            <main>
                <p className="text-muted">Cargando marcha…</p>
            </main>
        );
    }

    const marcha = marchas.find(m => m.id === slug);

    if (!marcha) {
        return <Navigate to="/marchas" replace />;
    }

    return (
        <main className="p-5 bg-light min-vh-100">
            <PageTitle title={marcha.titulo} />

            <h1 className="page-context-title">{marcha.titulo}</h1>

            <p className="lead">
                Autor: <strong>{marcha.autor}</strong> | Año:{" "}
                <strong>{marcha.year}</strong>
            </p>

            <p className="text-muted">{marcha.descripcion}</p>

            <hr />

            <MarchaInstruments instrumentos={marcha.instrumentos} />

            <div className="Partituras py-5 shadow-sm px-4 mt-4 bg-white">
                <h2>Partituras Disponibles</h2>
                <div className="d-flex flex-column gap-4 mt-4">
                    {Object.entries(marcha.partituras).map(([nombreInst, url]) => {
                        // Solo renderizamos si la URL existe y no es el texto "url" o vacío
                        if (url && url.length > 5 && url.startsWith("http")) {
                            return (
                                <div key={nombreInst} className="instrumento-item">
                                    <h5 className="text-capitalize mb-2">{nombreInst}</h5>
                                    <button
                                        className="PartituraBTN"
                                        onClick={() => window.open(url, "_blank")}
                                    >
                                        <p>Leer/Descargar PDF</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-file-earmark-pdf"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                            <path d="M4.603 12.087a.8.8 0 0 1-.438-.42c-.195-.406-.13-.902.124-1.33.358-.605.915-1.107 1.514-1.41a17.4 17.4 0 0 1 1.845-.813 5.3 5.3 0 0 0-.992-1.499.5.5 0 0 1 .12-.783 1.5 1.5 0 0 1 1.558-.03.6.6 0 0 1 .304.503c.01.27-.067.574-.187.884-.128.331-.329.662-.578.967.63.272 1.235.508 1.778.7.569.201 1.096.392 1.453.656.33.243.606.569.65.919a.6.6 0 0 1-.307.513c-.332.204-.852.172-1.339-.041-.568-.249-1.222-.724-1.807-1.369a15.3 15.3 0 0 1-2.812.742c-.543.796-1.2 1.256-1.721 1.256zM10.75 11.033c-.116-.085-.304-.197-.584-.33a15.6 15.6 0 0 0-1.427-.554c.438.465.847.75 1.174.893.188.083.413.128.837.009a.3.3 0 0 0 .15-.11.3.3 0 0 0-.15-.11zM6.927 9.531c.297.145.656.302.91.411.364-.15.934-.412 1.611-.758-.118-.112-.24-.224-.362-.33a14.7 14.7 0 0 0-1.413-.984c-.161.16-.322.31-.482.458-.335.308-.62.558-.876.712ZM10.892 10.192c-.287-.209-.802-.406-1.456-.582a15.8 15.8 0 0 0 1.218.847c.36.216.738.388 1.018.33.164-.034.214-.136.214-.191 0-.056-.05-.143-.194-.214ZM5.485 11.193c.121 0 .403-.225.753-.742a16.2 16.2 0 0 0-1.127.359c-.452.17-.741.412-.741.59 0 .115.112.193.21.193z" />
                                        </svg>
                                    </button>
                                </div>
                            );
                        }
                        return null;
                    })}

                    {/* Mensaje opcional si no hay ninguna partitura */}
                    {Object.values(marcha.partituras).every(url => !url || url === "url") && (
                        <p className="text-muted">No hay partituras digitales disponibles para esta marcha.</p>
                    )}
                </div>
            </div>
        </main>
    );
};

export default MarchaDetail;
