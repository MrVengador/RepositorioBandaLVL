import { useEffect, useState } from "react";
import Papa from "papaparse";

const CSV_URL =
    "https://docs.google.com/spreadsheets/d/1yzxu2Y2kZlkrRBA01HRQ65FuEXMqZhsASgw-io5Udas/export?format=csv";

export const useMarchasData = () => {
    const [marchas, setMarchas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        Papa.parse(CSV_URL, {
            download: true,
            header: true,           // ← CLAVE
            skipEmptyLines: true,
            complete: (result) => {
                const data = result.data.map((row) => ({
                    id: row.id,
                    titulo: row.title || "?",
                    autor: row.author || "Desconocido",
                    year: row.year || "Desconocido",
                    descripcion: row.description || "",
                    instrumentos: {
                        general: row.main || null,
                        caja: row.caja || null,
                        pifano: row.pifano || null,
                        clarin: row.clarin || null,
                        bateria: row.bateria || null,
                        instrumental: row.instrumental || null,
                    },
                    partituras: {
                        "Trompeta": row.Trompeta || null,
                        "Trompeta 2": row["Trompeta 2"] || null,
                        "Trombón": row.Trombón || null,
                        "Trombón 2": row["Trombón 2"] || null,
                        "Lira": row.Lira || null,
                        "Pifanos": row.Pifanos || null,
                    },
                }));

                setMarchas(data);
                setLoading(false);
            },
            error: (err) => {
                console.error(err);
                setError(err);
                setLoading(false);
            },
        });
    }, []);

    return { marchas, loading, error };
};
