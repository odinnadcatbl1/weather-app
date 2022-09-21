import axios from "axios";
import { useEffect } from "react";
import { useActions } from "./hooks/useActios";
import { useTypedSelector } from "./hooks/useTypedSelector";

function App() {
    const { data, loading, error } = useTypedSelector((state) => state.weather);
    const { fetchWeather } = useActions();
    useEffect(() => {
        fetchWeather("Kazan");
    }, []);

    return (
        <div className="app">
            <div className="container">
                hello
                {data.map((data) => (
                    <div key={data.dt_txt}>{data.main.temp}</div>
                ))}
            </div>
        </div>
    );
}

export default App;
