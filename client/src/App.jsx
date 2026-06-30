import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TournamentCard from "./components/TournamentCard";

function App() {
    return (
    <>
        <div>
            <Navbar />
            <Home />
        </div>
        <h1>Assassin-s Esports</h1>

        <TournamentCard
        title="Assassin-s Valorant Cup"
        game="Valorant"
        prizePool="₹10,000"
        />

        <TournamentCard
        title="BGMI Championship"
        game="BGMI"
        prizePool="₹5,000"
        />
    </>
    );
}

export default App;

function App() {
    return (
        <div>
            <Navbar />
            <Home />
        </div>
    );
}

export default App;