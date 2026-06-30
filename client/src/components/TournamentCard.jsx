function TournamentCard({ title, game, prizePool }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{game}</p>
      <p>{prizePool}</p>
    </div>
  );
}

export default TournamentCard;