function Backup() {
  let [current, setCurrent] = useState("e");
  let [layer1, setLayer1] = useState(["e", "e", "e", "e", "e", "e"]);
  let [layer2, setLayer2] = useState(["!", "e", "e", "e", "e", "e", "e"]);
  let [layer3, setLayer3] = useState(["e", "e", "e", "e", "e", "e"]);
  let [layer4, setLayer4] = useState(["!", "e", "e", "e", "e", "e", "e"]);
  let [happiness, setHappiness] = useState(0);
  let [population, setPopulation] = useState(0);
  let [sustainability, setSustainability] = useState(0);
  let [powerDraw, setPowerDraw] = useState(0);
  let [money, setMoney] = useState(1000000);
  const findOccurences = (item) =>
    layer1.filter((x) => x === item).length +
    layer2.filter((x) => x === item).length +
    layer3.filter((x) => x === item).length +
    layer4.filter((x) => x === item).length;
  useEffect(() => {
    setHappiness(
      (findOccurences("🍴") + findOccurences("🎥") + findOccurences("🌳")) *
        (findOccurences("🏠") * 4)
    );
    setPopulation(findOccurences("🏠") * 4);
    setSustainability(
      findOccurences("☀️") + findOccurences("🌳") - findOccurences("🛢️") * 2
    );
    setPowerDraw(
      findOccurences("🏠") * 4 -
        (findOccurences("☀️") + findOccurences("🛢️") * 2)
    );
    setMoney(
      1000000 -
        (findOccurences("🏠") * 500000 +
          findOccurences("☀️") * 57500 +
          findOccurences("🛢️") * 57500 +
          findOccurences("🌳") * 25000 +
          findOccurences("🎥") * 25000 +
          findOccurences("🍴") * 25000) +
        happiness * 100
    );
  });
  return (
    <>
      {/*<SpeedrunTimer />
      <br />*/}
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
          Theater
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
        <button
          style={{ margin: "5px", padding: "5px", fontSize: "15pt" }}
          onClick={() => {
            alert(`Paste this somewhere safe:`);
            alert(
              JSON.stringify({
                layer1: layer1,
                layer2: layer2,
                layer3: layer3,
                layer4: layer4,
              })
            );
          }}
        >
          <b>Save</b>
        </button>
        <button
          style={{ margin: "5px", padding: "5px", fontSize: "15pt" }}
          onClick={() => {
            let n = JSON.parse(prompt("Enter save code"));
            setLayer1(n.layer1);
            setLayer2(n.layer2);
            setLayer3(n.layer3);
            setLayer4(n.layer4);
          }}
        >
          <b>Load</b>
        </button>
      </div>
      <p style={{ margin: "5px", padding: "5px", fontSize: "20pt" }}>
        Population: {population} Sustainability: {sustainability} Happiness:{" "}
        {happiness} Power Draw: {powerDraw} Money: {money}{" "}
        <b>
          Overall:{" "}
          {(happiness +
            population +
            sustainability -
            powerDraw +
            Math.round(money / 1000000)) *
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
