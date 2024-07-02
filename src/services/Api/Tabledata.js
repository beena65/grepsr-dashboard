import {useState, useEffect} from "react";

const Tableapi = "https://63883c2bd94a7e504095e98b.mockapi.io/fakeApiqqqqqqq";

const Tabledata = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [rows, setRows] = useState([]);
    useEffect(() => {
        setLoading(true);
        fetch(Tableapi)
        .then((response) => {
            if (!response.ok) {
                throw new error("failed to fetch data");
            }
            return response.json();
        })
        .then((data) => {
            setRows(data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
        });
    }, []);
    return {loading, rows, error};
};

export default Tabledata;
