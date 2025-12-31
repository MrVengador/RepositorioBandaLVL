import HomeBanner from "../components/home/HomeBanner.jsx";
import homeBannerSlides from "../data/homeBannerData.js";
import "../components/home/home.css";
import PageTitle from "../components/common/PageTitle.jsx";

const Home = () => {
    return (
        <>
            <PageTitle title="Home" />
            <HomeBanner slides={homeBannerSlides} />

            <main className="mb-5 p-5 bg-light">
                <section className="content-card p-5 bg-white shadow-sm rounded">
                    <h2 className="page-context-title">Bienvenidos</h2>
                    <p>
                        Este sitio funciona como un repositorio digital de la Banda
                        Instrumental LVL. Aquí podrás encontrar marchas organizadas por
                        sección instrumental, material audiovisual y próximas actividades.
                    </p>
                </section>

                {/* <section className="home-actions mt-5">
                    <div className="row text-center">
                        <div className="col-md-4">
                            <h3>Marchas</h3>
                            <p>Explora el repertorio por sección instrumental.</p>
                        </div>
                        <div className="col-md-4">
                            <h3>Presentaciones</h3>
                            <p>Revisa las próximas actividades y eventos.</p>
                        </div>
                        <div className="col-md-4">
                            <h3>Galería</h3>
                            <p>Imágenes de presentaciones y actividades.</p>
                        </div>
                    </div>
                </section> */}
            </main>
        </>
    );
};

export default Home;
