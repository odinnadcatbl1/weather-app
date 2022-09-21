import { useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import "./towns.scss";

const Towns: React.FC = () => {
    const { towns, activeTown } = useTypedSelector((state) => state.towns);
    const [town, setTown] = useState("");
    const { addTown, deleteTown, setActiveTown } = useActions();

    const handlerAdd = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (town) {
            addTown(town);
            setTown("");
        }
    };

    useEffect(() => {
        const storage = localStorage.getItem("town");
        if (storage !== null) {
            const localTowns = JSON.parse(storage);
            for (let i = 0; i <= localTowns.length; i++) {
                const town = localTowns[i];
                if (town) {
                    addTown(town.name);
                }
            }
        }
    }, []);

    useEffect(() => {
        if (!towns.length) {
            setActiveTown({
                id: "",
                name: "",
            });
        }
    }, [towns]);

    return (
        <div className="towns">
            <form className="towns__form" onSubmit={(e) => handlerAdd(e)}>
                <input
                    type="text"
                    className="towns__input"
                    placeholder="Введите город"
                    value={town}
                    onChange={(e) => setTown(e.target.value)}
                />

                <button className="towns__button towns__button--add">
                    Добавить
                </button>
            </form>

            <ul className="towns__list">
                {towns.map((town) => {
                    return (
                        <li className="towns__item" key={town.id}>
                            <button
                                className={
                                    activeTown.id === town.id
                                        ? "towns__button towns__button--active"
                                        : "towns__button"
                                }
                                onClick={() => setActiveTown(town)}
                            >
                                {town.name}
                            </button>

                            <button
                                className="towns__button towns__button--delete"
                                onClick={() => deleteTown(town.id)}
                            >
                                x
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Towns;
