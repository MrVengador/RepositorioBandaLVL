import { useState } from "react";
import MarchaCard from "../components/marchas/MarchaCard.jsx";
import SearchBar from "../components/ui/SearchBar.jsx";
import { useMarchasData } from "../data/useMarchasData.js";
import marchasFallback from "../data/marchasData.js";
import PageTitle from "../components/common/PageTitle.jsx";


const Marchas = () => {
    const [search, setSearch] = useState("");

    // Hook principal (Google Sheets / CSV)
    const { marchas, loading, error } = useMarchasData();

    // Fuente de datos efectiva (CSV → fallback JSON)
    const marchasSource =
        !loading && Array.isArray(marchas) && marchas.length > 0
            ? marchas
            : marchasFallback;

    // Filtro de búsqueda
    const marchasFiltradas = (marchasSource || []).filter((marcha) =>
        marcha?.titulo?.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <main className="pt-5 px-5 bg-light min-vh-100">

            <PageTitle title="Marchas" />

            {/* TÍTULO */}
            <h1 className="page-context-title my-5">
                Catálogo de Marchas
            </h1>

            {/* BUSCADOR */}
            <SearchBar
                value={search}
                onChange={setSearch}
                placeholder="Buscar por nombre"
                id="buscadorMarchas"
            />

            {/* ESTADO DE CARGA */}
            {loading && (
                <p className="text-muted mt-3">
                    Cargando marchas desde la base de datos…
                </p>
            )}

            {/* LISTADO */}
            <section className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" id="listaMarchas">
                {marchasFiltradas.length > 0 ? (
                    marchasFiltradas.map((marcha) => (
                        <div className="col" key={marcha.id}>
                            <MarchaCard {...marcha} />
                        </div>
                    ))
                ) : (
                    /* Cambiamos el contenedor para que ocupe las 12 columnas y centre el contenido */
                    <div className="col-12 d-flex flex-column align-items-center justify-content-center py-5 w-100">
                        <h3 className="text-muted text-center mb-3">
                            No se encontraron marchas que coincidan con <br />
                            <strong>"{search}"</strong>
                        </h3>
                        <button
                            className="btn btn-primary px-4"
                            onClick={() => setSearch("")}
                        >
                            Limpiar búsqueda
                        </button>
                    </div>
                )}
            </section>

            {/* FALLBACK AVISO */}
            {!loading && error && (
                <p className="text-muted mt-4">
                    Mostrando datos locales por error de conexión.
                </p>
            )}
        </main>
    );
};

export default Marchas;
