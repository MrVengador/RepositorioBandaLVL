// useMarchasSource.js
import { useMarchasData } from "./useMarchasData";
import marchasFallback from "./marchasData";

export const useMarchasSource = () => {
    const { marchas, loading, error } = useMarchasData();

    // ✅ Mientras carga, NO usamos el fallback todavía
    const source =
        !loading
            ? (marchas && marchas.length > 0 ? marchas : marchasFallback)
            : []; // lista vacía mientras carga

    return {
        marchas: source,
        loading,
        error
    };
};