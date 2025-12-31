import { useEffect } from "react";

const PageTitle = ({ title }) => {
    useEffect(() => {
        // Aquí defines el formato del título
        document.title = `${title} | Repositorio Banda LVL`;
    }, [title]);

    return null; // Este componente no renderiza nada visualmente
};

export default PageTitle;