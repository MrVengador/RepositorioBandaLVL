import { useMarchasData } from "./useMarchasData";
import marchasFallback from "./marchasData";

export const useMarchasSource = () => {
    const { marchas, loading, error } = useMarchasData();

    const source =
        marchas && marchas.length > 0
            ? marchas
            : marchasFallback;

    return {
        marchas: source,
        loading,
        error
    };
};