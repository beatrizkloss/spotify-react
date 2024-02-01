import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./elementos/Header";
import Footer from "./elementos/Footer";
import Sidebar from "./elementos/Sidebar";
import Main from "./elementos/Main";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const [showCards, setShowCards] = useState(true);

  useEffect(() => {
    if (search !== "") {
      fetch(`https://spotify-reacty.vercel.app/artists?name_like=${search}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setShowCards(data.length === 0);
        })
        .catch((error) => console.error(error));
    }
  }, [search]);

  return (
    <div>
      <Sidebar />
      <Header onChange={setSearch} />
      <Main data={data} showCards={showCards} />
      <Footer />
    </div>
  );
}

export default App;
