let [verdentGamePageMode, setVerdentGamePageMode] = useState("Card");

function Card() {
  return (
    <>
      <h1>Verdent: Sustainable City Builder</h1>
      <p>
        Build a sustainable city and see how environmentally friendly it can be.
      </p>
      <button onClick = {() => {
        console.log("Changing")
          setVerdentGamePageMode("Game");
      }}>Start</button>
    </>
  );
}

function App() {
  return(
    <>
      <h1>Verdent: Sustainable City Builder</h1>
      {verdentGamePageMode === "Game" ? <Main /> : <Card />}
      <CDNMap coordinates = {[0,0]} />
    </>
  );
}
