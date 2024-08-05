import { useEffect, useState } from "react";
import { HfInference } from "@huggingface/inference";

export default function NewCard({
  setCardArray,
  cardArray,
  setVisible,
  toggleVisibility,
}) {
  const hf = new HfInference(import.meta.env.VITE_APP_API_KEY);
  const [imageText, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [nameText, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [addImg, setAddImg] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    try {
      let result = await hf.textToImage({
        inputs: imageText,
        model: "stabilityai/stable-diffusion-2",
        parameters: {
          negative_prompt: "blurry",
        },
      });

      if (result instanceof Blob) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64data = reader.result;
          setImageUrl(base64data);
          setAddImg(base64data);
        };
        reader.onerror = (error) => {
          console.error("Error reading Blob:", error);
        };
        reader.readAsDataURL(result);
      } else {
        console.error("Unexpected response:", result);
        setImageUrl("");
        setErrorMessage(
          "Unexpected response. Please search for something else."
        );
      }
    } catch (error) {
      console.error("Error generating image:", error);
      setImageUrl("");
      setErrorMessage(
        "Error generating image. Please search for something else."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (addImg && nameText) {
      const newCard = {
        id: cardArray.length + 1,
        imgUrl: imageUrl,
        name: nameText,
      };

      setCardArray((prevCards) => {
        const updatedCards = [...prevCards, newCard];
        localStorage.setItem("cards", JSON.stringify(updatedCards));
        return updatedCards;
      });
      toggleVisibility();
    } else {
      alert("Enter Name or Search Image!");
    }
  };

  useEffect(() => {
    console.log(imageText, nameText);
  }, [imageText, nameText]);

  return (
    <div className="flex flex-col items-center justify-center bg-anime-pattern p-6 rounded-lg shadow-lg border-2 border-yellow-400">
      <div className="text-2xl font-bold mb-4 text-red-600">
        Generate Card with AI
      </div>
      {loading && (
        <div className="flex items-center justify-center mb-4">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-yellow-500"></div>
        </div>
      )}
      {imageUrl && !loading && (
        <img
          src={imageUrl}
          alt="Generated"
          className="h-60 w-60 border border-2 border-red-500 mb-4 rounded-lg shadow-lg"
        />
      )}
      {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md border border-yellow-400"
      >
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search for image using AI"
            value={imageText}
            onChange={(e) => setText(e.target.value)}
            className="border border-red-300 text-black rounded-md p-2 w-full focus:outline-none focus:ring focus:ring-red-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Name" className="block mb-1 text-red-600">
            Name:{" "}
            <input
              type="text"
              value={nameText}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Enter Name"
              className="border border-red-300 text-black rounded-md p-2 w-full focus:outline-none focus:ring focus:ring-red-300"
            />
          </label>
        </div>
        <div className="flex justify-between">
          <input
            type="submit"
            value="Search"
            className="bg-red-500 font-semibold py-2 px-4 rounded-md hover:bg-red-600 transition duration-200 cursor-pointer"
            onClick={handleClick}
          />
          <input
            type="submit"
            value="Submit"
            className="bg-yellow-500  font-semibold py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-200 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
}
