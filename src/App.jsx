import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import NewCard from "./Components/NewCard";

function App() {
  const [score, setScore] = useState(0);
  const [cards, setCards] = useState(() => {
    const savedCards = localStorage.getItem("cards");
    return savedCards
      ? JSON.parse(savedCards)
      : [
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
  });

  const [selected, setSelected] = useState([]);
  const [isNewCardVisible, setNewCardVisible] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    console.log(selected);
    console.log(score);
    if (score === cards.length) {
      setMsg("Congratulations! You've conquered the memory quest!");
      setScore(0);
      setSelected([]);
    }
  }, [selected, score]);

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
    console.log(cards);
  }, [cards]);

  const toggleNewCardVisibility = () => {
    setNewCardVisible(!isNewCardVisible);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <div className="w-full py-6 px-4">
        <div className="flex flex-col">
          <div className="flex justify-around items-center py-4 ">
            <div className="text-4xl font-bold text-pink-500 animate-bounce">
              Memory Quest
            </div>
            <div className="text-4xl font-semibold mr-24">
              Score: <span className="text-yellow-400">{score}</span>
            </div>
            <div>
              <button
                onClick={toggleNewCardVisibility}
                className="rounded-xl bg-pink-500 text-white py-2 px-4 hover:bg-pink-600 transition duration-200"
              >
                Add Card with AI
              </button>
            </div>
          </div>
          {msg.charAt(0) === "C" ? (
            <div className="flex justify-center items-center text-green-600 font-bold text-3xl mb-2 mt-[-10px]">
              {msg}
            </div>
          ) : (
            <div className="flex justify-center items-center text-red-600 font-bold text-3xl mb-2 mt-[-10px]">
              {msg}
            </div>
          )}

          <div className="flex justify-center items-center text-orange-500 font-bold text-xl pb-4">
            Test your memory! Click each card only once or you'll lose
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
          {cards.map((card, idx) => (
            <Card
              msg={msg}
              setMsg={setMsg}
              score={score}
              setScore={setScore}
              key={idx}
              imageUrl={card.imgUrl}
              name={card.name}
              id={card.id}
              setSelected={setSelected}
              selected={selected}
              cardArray={cards}
              setCardArray={setCards}
            />
          ))}
        </div>
      </div>

      {isNewCardVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-11/12 max-w-md">
            <NewCard
              cardArray={cards}
              setCardArray={setCards}
              setVisible={setNewCardVisible}
              toggleVisibility={toggleNewCardVisibility}
            />
            <button
              onClick={toggleNewCardVisibility}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
