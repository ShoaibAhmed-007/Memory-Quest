import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [score, setScore] = useState(0);
  const cards = [
    {
      id: 1,
      imgUrl:
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnEzanRlOTkwN2ltN2Uyb2J6enNwc2VoOHpkZm85ZXJraGExMHIwMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tliXLSkzfq2C4/giphy.gif",
      name: "Eren Yeager",
    },
    {
      id: 2,
      imgUrl:
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2I0b3QydnYyd2E2MnV6N3Zkc2dzZG43ZGNnOWpiaHE3MXE1Zno2OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3fD1QmD1w0RVV74psX/giphy.gif",
      name: "Goku",
    },
    {
      id: 3,
      imgUrl:
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjZwZjFjZjA3M3lkcTZ1cmJlbDZsOWRkNm8yOHZwY3I4cWxwN2ljNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pNn4hlkovWAHfpLRRD/giphy.gif",
      name: "Vegeta",
    },
    {
      id: 4,
      imgUrl:
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjg0enVxNHVlZXkxdXZkOGphd3E2c3VvMzFwcnliMDJqMDl5aHBhZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1gDtIz79gmhCo/giphy.gif",
      name: "Levi Ackerman",
    },
    {
      id: 5,
      imgUrl:
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3F4ejVtcHZqMGE4OXlvcmthdWVzY3cybGYwMTM2MTM2bWsxMXNteSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YmZOBDYBcmWK4/giphy.gif",
      name: "Light Yagami",
    },
    {
      id: 6,
      imgUrl:
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWtzb2c2N3F6OXVqbGtqbTEyNG80ZTU4dTlqdGhpY2plNDc5ZTN2eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NNVrFKZF3s61W/giphy.gif",
      name: "Guts",
    },
    {
      id: 7,
      imgUrl:
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTBrZjFjenhuc3A5cTlsZXlxMzBidnhyYm1teTBjeGFoaG16cHg5dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUA7aY4Mr6J4tXFLVK/giphy.gif",
      name: "Griffith",
    },
    {
      id: 8,
      imgUrl:
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3BoaGYybzNhc25pMzg3NmQ2aW12emoyOGt5Y2l5ZWs0OHlsb2pweiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YbHnru6KfNiUGeNeCf/giphy.gif",
      name: "Broly",
    },
    {
      id: 9,
      imgUrl:
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWI3M2ppeWIxeGpnNmE0djhpYzl4M256MjBvczMzMmZnZ25ydmVpMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/n7vNBmkwxpcY0/giphy.gif",
      name: "Gohan",
    },
    {
      id: 10,
      imgUrl:
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGYyN3Q0aXZvMDk0anFlazhhajNqMzVmczlyY2txeWJuOHJhMWU5ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ItabziIspdC7e/giphy.gif",
      name: "Trunks",
    },
  ];
  const [selected, setSelected] = useState([]);
  useEffect(() => {
    console.log(selected);
    console.log(score);
  }, [selected, score]);

  return (
    <>
      <div>Memory Quest</div>
      <div>Score: {score}</div>
      <div className="grid grid-cols-5 gap-10 p-4">
        {cards.map((card, idx) => {
          return (
            <Card
              score={score}
              setScore={setScore}
              key={idx}
              imageUrl={card.imgUrl}
              name={card.name}
              id={card.id}
              setSelected={setSelected}
              selected={selected}
              cardArray={cards}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
