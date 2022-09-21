import Graph from "./components/Graph/Graph";
import Towns from "./components/Towns/Towns";

function App() {
    return (
        <div className="app">
            <div className="container">
                <div className="app__inner">
                    <Towns />
                    <Graph />
                </div>
            </div>
        </div>
    );
}

export default App;
