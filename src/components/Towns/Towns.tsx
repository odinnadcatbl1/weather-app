import "./towns.scss";

const Towns: React.FC = () => {
    return (
        <div className="towns">
            <form className="towns__form">
                <input
                    type="text"
                    className="towns__input"
                    placeholder="Введите город"
                />

                <button className="towns__button"></button>
            </form>

            <ul className="towns__list">
                <li className="towns__item">
                    <button className="towns__button">s</button>
                </li>
            </ul>
        </div>
    );
};

export default Towns;
