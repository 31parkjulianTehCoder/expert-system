function App() {
  let [gameStarted, setStarted] = useState(false);
  let [tempx, settempx] = useState(0);
  let [tempy, settempy] = useState(0);
  return (
    <>
      {gameStarted ? (
        <Main />
      ) : (
        <>
          <h1>Verdent: Sustainable City Builder</h1>
          <p>
            Build a sustainable city and see how environmentally friendly it can
            be.
          </p>
          <button
            onClick={() => {
              setStarted(true);
            }}
          >
            Start
          </button>
        </>
      )}
      <hr />
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
