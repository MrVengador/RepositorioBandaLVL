import { useEffect, useState } from "react";


const CSV_URL = "https://docs.google.com/spreadsheets/d/1yzxu2Y2kZlkrRBA01HRQ65FuEXMqZhsASgw-io5Udas/export?format=csv&gid=635456825";
//  https://docs.google.com/spreadsheets/d/1yzxu2Y2kZlkrRBA01HRQ65FuEXMqZhsASgw-io5Udas/edit?usp=sharing

export const usePresentacionesData = () => {
    const [presentaciones, setPresentaciones] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(CSV_URL)
            .then(res => res.text())
            .then(text => {
                const rows = text.split("\n").slice(1);

                const data = rows.map(row => {
                    const [
                        id,
                        title,
                        type,
                        date,
                        cover,
                        drive_url
                    ] = row.split(",");

                    return {
                        id,
                        title,
                        type,
                        date,
                        cover,
                        driveUrl: drive_url
                    };
                });

                setPresentaciones(data.filter(p => p.id));
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, []);

    return { presentaciones, loading, error };
};
