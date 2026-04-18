function App() {
  let [gameStarted, setStarted] = useState(false);
  let [competitive, setCompetitive] = useState(false)
  let [tempx, settempx] = useState(0);
  let [tempy, settempy] = useState(0);
  return (
    <>
      {gameStarted ? (
        competitive ? <Backup /> : <Main />
      ) : (
        <div className = "default" style = {{margin: "5px", padding: "5px"}}>
          <h1 style = {{margin: "5px", padding: "5px"}}>Verdent: Sustainable City Builder</h1>
          <p style = {{margin: "5px", padding: "5px"}}>
            Build a sustainable city and see how environmentally friendly it can
            be.
          </p>
          <button
            style = {{margin: "5px", padding: "5px"}}
            onClick={() => {
              setCompetitive(false);
              setStarted(true);
            }}
          >
            Start Easy Mode
          </button>
          <button
            style = {{margin: "5px", padding: "5px"}}
            onClick={() => {
              setCompetitive(true);
              setStarted(true);
            }}
          >
            Start Competitive Mode
          </button>
          <a href = "./titlescreen.html">Back to title</a>
        </div>
      )}
      {/*
      <h2>Debug</h2>
      <button onClick = {() => {
        settempx(prompt("Set x of map"));
        settempy(prompt("Set y of map"))
      }}>Update coordinates</button>
      <CDNMap coordinates={[tempx, tempy]} />
      */}
    </>
  );
}
