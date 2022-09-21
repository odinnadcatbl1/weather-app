import { useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";
import "./graph.scss";
import { IGraphData } from "../../types/types";

const Graph: React.FC = () => {
    const { activeTown } = useTypedSelector((state) => state.towns);
    const { data, error, loading } = useTypedSelector((state) => state.weather);
    const [graphData, setGraphData] = useState<IGraphData[]>([]);
    const { fetchWeather } = useActions();

    useEffect(() => {
        if (activeTown.id) {
            fetchWeather(activeTown.name);
        }

        if (data.length) {
            for (let i = 0; i < data.length; i++) {
                const dataItem = {
                    date: data[i].dt_txt,
                    temp: Math.floor(+data[i].main.temp - 273.15),
                };

                setGraphData([...graphData, dataItem]);
            }
            // setGraphData(
            //     data.slice(1, 8).map((data) => {
            //         return {
            //             date: data.dt_txt.split(" ")[0],
            //             temperature: +data.main.temp - 273.15,
            //         };
            //     })
            // );
        }
    }, [activeTown]);

    if (error) {
        return (
            <div className="graph">
                <div className="graph__info">
                    Ошибка загрузки, проверьте подключение к интернету или
                    название города
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="graph">
                <div className="graph__info graph__info--loading">
                    Загрузка...
                </div>
            </div>
        );
    }

    return (
        <div className="graph">
            {/* {activeTown.id !== "" &&
                data.slice(8).map((temp) => {
                    return (
                        <div className="graph__item" key={temp.dt_txt}>
                            {temp.dt_txt} -{" "}
                            {Math.floor(+temp.main.temp - 273.15)}
                        </div>
                    );
                })} */}

            {!activeTown.id && (
                <div className="graph__info">Для начала, выберите город!</div>
            )}

            {activeTown.id && (
                <div>
                    <LineChart
                        width={500}
                        height={300}
                        data={data.map((data) => {
                            return {
                                date: data.dt_txt,
                                temp: Math.floor(+data.main.temp - 273.15),
                            };
                        })}
                    >
                        <Line type="monotone" dataKey="temp" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="2 2" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </div>
            )}
        </div>
    );
};

export default Graph;
