function Backup() {
  /*const SpeedrunTimer = () => {
    const [time, setTime] = useState(0); // milliseconds
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);
  
    // Format time as mm:ss:ms
    const formatTime = (ms) => {
      const minutes = Math.floor(ms / 60000);
      const seconds = Math.floor((ms % 60000) / 1000);
      const hundredths = Math.floor((ms % 1000) / 10);
      return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
        2,
        "0"
      )}:${String(hundredths).padStart(2, "0")}`;
    };
  
    // Start or stop timer
    const toggleTimer = (e) => {
      e.preventDefault(); // prevent accidental form submit
      e.stopPropagation(); // prevent click propagation
  
      if (isRunning) {
        clearInterval(intervalRef.current);
        setIsRunning(false);
      } else {
        const start = Date.now() - time;
        intervalRef.current = setInterval(() => {
          setTime(Date.now() - start);
        }, 10);
        setIsRunning(true);
      }
    };
  
    // Reset timer
    const resetTimer = (e) => {
      e.preventDefault();
      e.stopPropagation();
  
      clearInterval(intervalRef.current);
      setTime(0);
      setIsRunning(false);
    };
  
    // Cleanup on unmount
    useEffect(() => {
      return () => clearInterval(intervalRef.current);
    }, []);
  
    return (
      <div
        style={{
          display: "inline-block",
          padding: "20px",
          border: "2px solid #444",
          borderRadius: "8px",
          textAlign: "center",
          userSelect: "none", // prevent accidental selection
        }}
      >
        <h2 style={{ margin: "0 0 10px 0" }}>Speedrun Timer</h2>
        <div
          style={{
            fontSize: "2.5rem",
            fontVariantNumeric: "tabular-nums",
            marginBottom: "15px",
          }}
        >
          {formatTime(time)}
        </div>
        <div>
          <button
            onClick={toggleTimer}
            style={{ marginRight: "10px", padding: "8px 16px" }}
          >
            {isRunning ? "Stop" : "Start"}
          </button>
          <button onClick={resetTimer} style={{ padding: "8px 16px" }}>
            Reset
          </button>
        </div>
      </div>
    );
  };
  */
  let [current, setCurrent] = useState("e");
  let [layer1, setLayer1] = useState(["e", "e", "e", "e", "e", "e"]);
  let [layer2, setLayer2] = useState(["!", "e", "e", "e", "e", "e", "e"]);
  let [layer3, setLayer3] = useState(["e", "e", "e", "e", "e", "e"]);
  let [layer4, setLayer4] = useState(["!", "e", "e", "e", "e", "e", "e"]);
  let [happiness, setHappiness] = useState(0);
  useEffect(() => {
    setHappiness(
      (layer1.filter((x) => x === "🍴").length +
        layer2.filter((x) => x === "🍴").length +
        layer3.filter((x) => x === "🍴").length +
        layer4.filter((x) => x === "🍴").length +
        (layer1.filter((x) => x === "🎥").length +
          layer2.filter((x) => x === "🎥").length +
          layer3.filter((x) => x === "🎥").length +
          layer4.filter((x) => x === "🎥").length) +
        (layer1.filter((x) => x === "🌳").length +
          layer2.filter((x) => x === "🌳").length +
          layer3.filter((x) => x === "🌳").length +
          layer4.filter((x) => x === "🌳").length)) *
        ((layer1.filter((x) => x === "🏠").length +
          layer2.filter((x) => x === "🏠").length +
          layer3.filter((x) => x === "🏠").length +
          layer4.filter((x) => x === "🏠").length) *
          4)
    );
  });
  return (
    <>
      <SpeedrunTimer />
      <br />
      <div>
        <button
          style={{ margin: "5px", padding: "5px", fontSize: "15pt" }}
          onClick={() => {
            setCurrent("🏠");
          }}
        >
          Residential
        </button>
        <button
          style={{ margin: "5px", padding: "5px", fontSize: "15pt" }}
          onClick={() => {
            setCurrent("🛢️");
          }}
        >
          Oil Plant
        </button>
        <button
          style={{ margin: "5px", padding: "5px", fontSize: "15pt" }}
          onClick={() => {
            setCurrent("☀️");
          }}
        >
          Solar Farm
        </button>
        <button
          style={{ margin: "5px", padding: "5px", fontSize: "15pt" }}
          onClick={() => {
            setCurrent("🍴");
          }}
        >
          Resturaunt
        </button>
        <button
          style={{ margin: "5px", padding: "5px", fontSize: "15pt" }}
          onClick={() => {
            setCurrent("🎥");
          }}
        >
          Theather
        </button>
        <button
          style={{ margin: "5px", padding: "5px", fontSize: "15pt" }}
          onClick={() => {
            setCurrent("🌳");
          }}
        >
          Green Space
        </button>
        <button
          style={{ margin: "5px", padding: "5px", fontSize: "15pt" }}
          onClick={() => {
            setCurrent("e");
          }}
        >
          Erase
        </button>
      </div>
      <p style={{ margin: "5px", padding: "5px", fontSize: "20pt" }}>
        Population:{" "}
        {(layer1.filter((x) => x === "🏠").length +
          layer2.filter((x) => x === "🏠").length +
          layer3.filter((x) => x === "🏠").length +
          layer4.filter((x) => x === "🏠").length) *
          4}{" "}
        Sustainability:{" "}
        {layer1.filter((x) => x === "☀️").length +
          layer2.filter((x) => x === "☀️").length +
          layer3.filter((x) => x === "☀️").length +
          layer4.filter((x) => x === "☀️").length +
          (layer1.filter((x) => x === "🌳").length +
            layer2.filter((x) => x === "🌳").length +
            layer3.filter((x) => x === "🌳").length +
            layer4.filter((x) => x === "🌳").length) -
          (layer1.filter((x) => x === "🛢️").length +
            layer2.filter((x) => x === "🛢️").length +
            layer3.filter((x) => x === "🛢️").length +
            layer4.filter((x) => x === "🛢️").length) *
            2}{" "}
        Happiness: {happiness}{" "}
        <b>
          Overall:{" "}
          {(happiness +
            (layer1.filter((x) => x === "☀️").length +
              layer2.filter((x) => x === "☀️").length +
              layer3.filter((x) => x === "☀️").length +
              layer4.filter((x) => x === "☀️").length -
              (layer1.filter((x) => x === "🛢️").length +
                layer2.filter((x) => x === "🛢️").length +
                layer3.filter((x) => x === "🛢️").length +
                layer4.filter((x) => x === "🛢️").length) *
                2) +
            (layer1.filter((x) => x === "🏠").length +
              layer2.filter((x) => x === "🏠").length +
              layer3.filter((x) => x === "🏠").length +
              layer4.filter((x) => x === "🏠").length) *
              4) *
            3}
        </b>
      </p>
      <br />
      {layer1.map((v, i) => (
        <button
          style={{
            fontSize: "20pt",
            padding: 5,
            height: 100,
            width: v === "!" ? 50 : 100,
            opacity: v === "!" ? 0 : undefined,
          }}
          onClick={() => {
            let temp = [...layer1];
            temp[i] = current;
            setLayer1(temp);
          }}
        >
          {v}
        </button>
      ))}
      <br />
      {layer2.map((v, i) => (
        <button
          style={{
            fontSize: "20pt",
            padding: 5,
            height: 100,
            width: v === "!" ? 50 : 100,
            opacity: v === "!" ? 0 : undefined,
          }}
          onClick={() => {
            let temp = [...layer2];
            temp[i] = current;
            setLayer2(temp);
          }}
        >
          {v}
        </button>
      ))}
      <br />
      {layer3.map((v, i) => (
        <button
          style={{
            fontSize: "20pt",
            padding: 5,
            height: 100,
            width: v === "!" ? 50 : 100,
            opacity: v === "!" ? 0 : undefined,
          }}
          onClick={() => {
            let temp = [...layer3];
            temp[i] = current;
            setLayer3(temp);
          }}
        >
          {v}
        </button>
      ))}
      <br />
      {layer4.map((v, i) => (
        <button
          style={{
            fontSize: "20pt",
            padding: 5,
            height: 100,
            width: v === "!" ? 50 : 100,
            opacity: v === "!" ? 0 : undefined,
          }}
          onClick={() => {
            let temp = [...layer4];
            temp[i] = current;
            setLayer4(temp);
          }}
        >
          {v}
        </button>
      ))}
      <br />
      <a href="./titlescreen.html">Back to title</a>
    </>
  );
}
