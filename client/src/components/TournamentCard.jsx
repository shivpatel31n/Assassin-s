function TournamentCard({ title, game, prizePool }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{game}</p>
      <p>{prizePool}</p>

      <button onClick={() => alert("Registration Coming Soon!")}>
        Register
      </button>
    </div>
  );
}

export default TournamentCard;