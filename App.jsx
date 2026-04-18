function App() {
  let [gameStarted, setStarted] = useState(false);
  return (
    <>
      <h1>Verdent: Sustainable City Builder</h1>
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
      <CDNMap coordinates={[0, 0]} />
    </>
  );
}
