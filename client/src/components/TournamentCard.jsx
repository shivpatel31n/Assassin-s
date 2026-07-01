function TournamentCard({ title, game, prizePool, discordLink }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{game}</p>
      <p>{prizePool}</p>

      <a href="https://discord.gg/7RCDt277Y" target="_blank" rel="noopener noreferrer">
        <button>Join Discord to Register</button>
      </a>
    </div>
  );
}

export default TournamentCard;