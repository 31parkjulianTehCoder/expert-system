function Backup() {
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
          layer4.filter((x) => x === "🎥").length)) *
        ((layer1.filter((x) => x === "🏠").length +
          layer2.filter((x) => x === "🏠").length +
          layer3.filter((x) => x === "🏠").length +
          layer4.filter((x) => x === "🏠").length) *
          4)
    );
  });
  return (
    <>
      <div>
        <button
          onClick={() => {
            setCurrent("🏠");
          }}
        >
          Residential
        </button>
        <button
          onClick={() => {
            setCurrent("🛢️");
          }}
        >
          Oil Plant
        </button>
        <button
          onClick={() => {
            setCurrent("☀️");
          }}
        >
          Solar Farm
        </button>
        <button
          onClick={() => {
            setCurrent("🍴");
          }}
        >
          Resturaunt
        </button>
        <button
          onClick={() => {
            setCurrent("🎥");
          }}
        >
          Theather
        </button>
      </div>
      <p style={{ fontSize: "20pt" }}>
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
          layer4.filter((x) => x === "☀️").length -
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
            padding: 5,
            height: 100,
            width: v === "!" ? 50 : 100,
            opacity: v === "!" ? 0 : undefined,
          }}
          onClick={() => {
            let temp = [...layer1];
            temp[i] = current;
            setLayer1(temp);
            setCurrent("e");
          }}
        >
          {v}
        </button>
      ))}
      <br />
      {layer2.map((v, i) => (
        <button
          style={{
            padding: 5,
            height: 100,
            width: v === "!" ? 50 : 100,
            opacity: v === "!" ? 0 : undefined,
          }}
          onClick={() => {
            let temp = [...layer2];
            temp[i] = current;
            setLayer2(temp);
            setCurrent("e");
          }}
        >
          {v}
        </button>
      ))}
      <br />
      {layer3.map((v, i) => (
        <button
          style={{
            padding: 5,
            height: 100,
            width: v === "!" ? 50 : 100,
            opacity: v === "!" ? 0 : undefined,
          }}
          onClick={() => {
            let temp = [...layer3];
            temp[i] = current;
            setLayer3(temp);
            setCurrent("e");
          }}
        >
          {v}
        </button>
      ))}
      <br />
      {layer4.map((v, i) => (
        <button
          style={{
            padding: 5,
            height: 100,
            width: v === "!" ? 50 : 100,
            opacity: v === "!" ? 0 : undefined,
          }}
          onClick={() => {
            let temp = [...layer4];
            temp[i] = current;
            setLayer4(temp);
            setCurrent("e");
          }}
        >
          {v}
        </button>
      ))}
    </>
  );
}

function App() {
  return <Backup />;
}
