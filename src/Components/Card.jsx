export default function Card({
  imageUrl = "",
  name = "Name of Card",
  id,
  setSelected,
  selected,
  cardArray,
  setCardArray,
  score,
  setScore,
  msg,
  setMsg,
}) {
  function shuffleCards(cards) {
    let shuffledCards = cards.slice();

    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [
        shuffledCards[j],
        shuffledCards[i],
      ];
    }

    return shuffledCards;
  }
  const handleClick = (e) => {
    if (msg !== "") {
      setMsg("");
    }
    let same = false;
    if (selected.length === 0) {
      console.log("0 length");
      setSelected([...selected, { id: e.target.id }]);
      setScore(score + 1);
    } else {
      selected.forEach((select) => {
        if (select.id === e.target.id) {
          console.log("Same id", id, Number(e.target.id));
          same = true;
          return;
        }
      });
      if (same) {
        setSelected([]);
        setScore(0);
        setMsg("Oh no! Better luck next time. Don't give up!");
      } else {
        console.log("Change id");
        setScore(score + 1);
        setSelected([...selected, { id: e.target.id }]);
      }
    }

    setCardArray(shuffleCards(cardArray));
  };
  return (
    <>
      <div
        onClick={handleClick}
        id={id}
        className="rounded-xl flex flex-col justify-center items-center gap-4 border border-2 border-black w-64 h-80"
      >
        <div>
          <img
            id={id}
            src={imageUrl}
            className="h-60 w-52 border border-1 border-yellow-600 rounded-xl"
          ></img>
        </div>
        <div id={id}>{name}</div>
      </div>
    </>
  );
}
