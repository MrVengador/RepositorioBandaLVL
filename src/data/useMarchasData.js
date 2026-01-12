import { useEffect, useState } from "react";

const CSV_URL = "https://docs.google.com/spreadsheets/d/1yzxu2Y2kZlkrRBA01HRQ65FuEXMqZhsASgw-io5Udas/export?format=csv";

export const useMarchasData = () => {
    const [marchas, setMarchas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(CSV_URL)
            .then(res => res.text())
            .then(text => {
                // Dividimos por líneas y filtramos líneas vacías
                const rows = text.split("\n").slice(1).filter(row => row.trim() !== "");

                const data = rows.map(row => {
                    // Importante: Si tus celdas tienen comas internas, 
                    // este split simple podría fallar.
                    const columns = row.split(",");

                    return {
                        id: columns[0],
                        titulo: columns[1],
                        autor: columns[2],
                        year: Number(columns[3]),
                        descripcion: columns[4],
                        instrumentos: {
                            general: columns[5], // Columna 'main'
                            caja: columns[6] || null,
                            pifano: columns[7] || null,
                            clarin: columns[8] || null,
                            bateria: columns[9] || null,
                            instrumental: columns[10] || null

                        },
                        partituras: {
                            "Trompeta": columns[11], // Columna K (índice 10)
                            "Trompeta 2": columns[12], // Columna L (índice 11)
                            "Trombón": columns[13],
                            "Trombón 2": columns[14],
                            "Lira": columns[15],
                        }
                    };
                });

                setMarchas(data);
            })
            .catch(err => console.error("Error cargando datos:", err))
            .finally(() => setLoading(false));
    }, []);

    return { marchas, loading, error };
};
