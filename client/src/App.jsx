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
      discordLink: "https://discord.gg/7RCDt277Y",
    },
    {
      id: 2,
      title: "BGMI Championship",
      game: "BGMI",
      prizePool: "₹5,000",
      discordLink: "https://discord.gg/7RCDt277Y",
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
          discordLink={tournament.discordLink}
        />
      ))}
    </>
  );
}

export default App;