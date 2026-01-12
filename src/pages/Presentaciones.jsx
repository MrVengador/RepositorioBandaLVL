import { useState } from "react";
import PresentacionCard from "../components/presentaciones/PresentacionesCard";
import SearchBar from "../components/ui/SearchBar";
import { usePresentacionesData } from "../data/usePresentacionesData";
import presentacionesFallback from "../data/presentacionesData";
import PageTitle from "../components/common/PageTitle";

const Presentaciones = () => {
    const [search, setSearch] = useState("");
    const { presentaciones, loading, error } = usePresentacionesData();

    const hasRemoteData = presentaciones && presentaciones.length > 0;
    const source = !loading && hasRemoteData ? presentaciones : presentacionesFallback;

    const filtradas = source.filter(p =>
        p.title?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <main className="px-5 bg-light min-vh-100 pb-5">
            <PageTitle title="Presentaciones" />

            <h1 className="page-context-title my-5">Presentaciones</h1>

            <SearchBar
                value={search}
                onChange={setSearch}
                placeholder="Buscar presentación"
                id="buscadorPresentaciones"
            />

            {/* ALERTAS DE ESTADO */}
            <div className="mt-3">
                {loading && (
                    <p className="text-muted animate-pulse">Cargando presentaciones…</p>
                )}

                {!loading && (error || !hasRemoteData) && (
                    <p className="text-muted small border-start border-warning ps-2">
                        <i className="bi bi-info-circle me-1"></i>
                        Mostrando catálogo local (offline)
                    </p>
                )}
            </div>

            {/* GRILLA DE TARJETAS O ESTADO VACÍO */}
            <section className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2">
                {filtradas.length > 0 ? (
                    filtradas.map(p => (
                        <div className="col" key={p.id}>
                            <PresentacionCard
                                id={p.id}
                                title={p.title}
                                type={p.type}
                                date={p.date}
                                cover={p.cover}
                                driveUrl={p.driveUrl}
                            />
                        </div>
                    ))
                ) : (
                    /* MENSAJE CENTRADO CUANDO NO HAY RESULTADOS */
                    <div className="col-12 d-flex flex-column align-items-center justify-content-center py-5 w-100">
                        <h3 className="text-muted text-center mb-3">
                            No se encontraron presentaciones que coincidan con <br />
                            <strong>"{search}"</strong>
                        </h3>
                        <button
                            className="btn btn-primary px-4"
                            onClick={() => setSearch("")}
                        >
                            Ver todas las presentaciones
                        </button>
                    </div>
                )}
            </section>

            {/* PIE DE PÁGINA (OPCIONAL) */}
            {!loading && filtradas.length > 0 && (
                <div className="mt-5 text-center border-top pt-4">
                    <p className="text-muted small">Fin del catálogo</p>
                </div>
            )}
        </main>
    );
};

export default Presentaciones;