import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TournamentCard from "./components/TournamentCard";

function App() {
  const tournaments = [
    {
      id: 1,
      title: "Valorant Cup",
      game: "Valorant",
      prizePool: "₹10,000",
    },
    {
      id: 2,
      title: "BGMI Championship",
      game: "BGMI",
      prizePool: "₹5,000",
    },
  ];

  return (
    <>
      <Navbar />
      <Home />

      {tournaments.map((tournament) => (
        <TournamentCard
          key={tournament.id}
          title={tournament.title}
          game={tournament.game}
          prizePool={tournament.prizePool}
        />
      ))}
    </>
  );
}

export default App;