function Main(){

    // n -> nothing
    // r -> residential
    // p -> plant/park
    // w -> water
    // s -> solar

    // g -> sustainable (green)
    // b -> neutral (blue)
    // p -> unsustainable (purple)

    let [pVal, setPVal] = useState('🫙');

    let [simDate, setSimDate] = useState(new Date());

    let zHeight = 4;
    let width = 4;
    let height = 4;

    let sWidth = 4;
    let sHeight = 4;

    let [TS, setTS] = useState(new Array(width * height * zHeight * sWidth * sHeight).fill('🫙'))

    let [ST, setST] = useState(new Array(width * height * zHeight).fill(false).map((val, i) => i === 0));


    let [sTile, setSTile] = useState({x: 0, y: 0, z: 0,});
    let twoRender = [];
    for (let i = 0; i < sWidth * sHeight; ++i){
        if (i % (width * 2) === 0 ) { twoRender.push(<div style={{width: "100%", height: "100%", /*border: "1px solid black", backgroundColor: "red"*/}}></div>); }
        let tehVal = TS[sTile.z * sWidth * sHeight * width * height + sTile.y * sWidth * sHeight * width + sTile.x * sWidth * sHeight + i];
        twoRender.push(<div onClick={() => {let cpy = [...TS]; cpy[sTile.z * sWidth * sHeight * width * height + sTile.y * sWidth * sHeight * width + sTile.x * sWidth * sHeight + i] = pVal; setTS(cpy)}} className={"twoTile"}>{tehVal === '🫙' ? '' : tehVal}</div>);
        if (i % (width * 2) === width * 2 - 1 ) {  twoRender.push(<div style={{width: "100%", height: "100%", /*border: "1px solid black", backgroundColor: "red"*/}}></div>); }
    }

    let toRender = [];
    for (let z = 0; z < zHeight; ++z){
        let zLayerBigTiles = new Array(width * height).fill(<div>empty</div>).map( (useless, i) => {
            let sArray = [];
            for (let w = 0; w< sWidth * sHeight; ++w) {
                if (w % (width * 2) === 0 ) { sArray.push(<div style={{width: "100%", height: "100%", /*border: "1px solid black", backgroundColor: "red"*/}}></div>); }
                let tehVal = TS[z * sWidth * sHeight * width * height + Math.floor(i / width) * sWidth * sHeight * width + i % width * sWidth * sHeight + w];
                sArray.push(<div style={{width: "100%", height: "100%", gridColumn: "span 2", display: "flex", justifyContent: "center", alignItems: "center", pointerEvents: "none"}}>{tehVal === '🫙' ? '' : tehVal}</div>);
                if (w % (width * 2) === width * 2 - 1 ) {  sArray.push(<div style={{width: "100%", height: "100%", /*border: "1px solid black", backgroundColor: "red"*/}}></div>); }
            }

            return <div style={{fontSize: 9, display: "grid", gridTemplateColumns: `repeat(${sWidth * 2 + 1}, 1fr)`, gridTemplateRows: `repeat(${sHeight}, 1fr)`}} onClick = {() => {
                let cpy = [...ST];
                cpy[z * width * height + i] = true;
                cpy[sTile.z * width * height + sTile.y * width + sTile.x] = false;
                setST(cpy);
                let coord = {x: i % width, y: Math.floor(i / width), z: z};
                setSTile(coord);
            }} className={ST[z * width * height + i] ? "selectedTile" : "tile"}>
                {sArray}
            </div>}
        );

        toRender.push(<div style={{
            transform: "rotate(30deg)",
            // backgroundColor: "lightgray",
            display: "grid",
            gridTemplateColumns: `repeat(${width}, 100px)`,
            gridTemplateRows: `repeat(${width}, 1fr)`,
            // border: "1px solid black",
            width: "300px",
            margin: 90,
        }}>
            {zLayerBigTiles}
        </div>);
    }



  return (
    <>
        {/* TEAL TITLE BAR */}
        <div style={{width: "100vw", height: 16, backgroundColor: "teal", display: "flex", flexFlow: "row nowrap", alignItems: "center", fontSize: 14}}>
            <div style={{color: "white"}}>{ `EcoBuilding 1402-A / ${zHeight - sTile.z > 1 ? `Lvl. ${zHeight - sTile.z - 1}` : "Ground Fl."} / Module ${sTile.x +1 }:${sTile.y +1 }`}</div>
            <div style={{width: 16}}></div>
            <div style={{color: "lightgøray"}}>Grøwax Isometric Editor Suite v1.0</div>
        </div>

        {/* OMNIPOTENT BACKGROUND */}
        <div style={{height: "calc(100vh - 16px)", backgroundImage: "url('./assets/bg.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
            {/* BACKGROUND BLUR + 3-PT FLEXBOX */}
            <div style={{height: "100%", width: "100%", display: "flex", flexDirection: "row", alignItems: "flex-start", backdropFilter: "blur(10px) grayscale(50%) contrast(20%)"}}>

                {/* ISOMETRIC BUILDING VIEW*/}
                <div style={{border: "1px solid teal", height: "100%", width: "575px", overflow: "scroll"}}>
                    {toRender}
                </div>

                {/* MIDDLE SECTION FLEXBOX */}
                <div style={{height: "100%", width: "600px", display: "grid", gridDirection: "column", gridTemplateRows: "1fr, 1fr 1fr" }}>

                    <div style={{width: "100%", backgroundColor: "#aaa8", display: "flex", flexFlow: "column nowrap"}}>
                        <div>Sim Time: {simDate.toString().substring(0, 21)}</div>
                        <div>Status: Unsustainable </div>
                        <div>Temperature: 23°F/45°C </div>
                            <input type={"range"} min={"0"} max={"86400000"} defaultValue={"43200000"} className={"DS"}/>
                        <div style={{width: "100%", height: 40, display: "flex", flexFlow: "row nowrap"}}>
                            <img onClick={() => setSimDate(new Date(simDate.getTime() - 86400000))}  src="./assets/fast_minus.svg" className="TB"/>
                            <img onClick={() => setSimDate(new Date(simDate.getTime() - 10800000))}  src="./assets/slow_minus.svg" className="TB"/>
                            <img src="./assets/play.svg" className="TB"/>
                            <img onClick={() => setSimDate(new Date(simDate.getTime() + 10800000))}  src="./assets/slow_plus.svg" className="TB"/>
                            <img onClick={() => setSimDate(new Date(simDate.getTime() + 86400000))}  src="./assets/fast_plus.svg" className="TB"/>
                        </div>

                    </div>


                    <div style={{
                        padding: 30,
                        height: "100%",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        flexDirection: "column",
                        color: "white",
                        fontSize: 16}}>
                        <div className={"pButton"} onClick={() => setPVal('🫙')}>[X] Erase Tile</div>
                        <div className={"pButton"} onClick={() => setPVal('🏠')}>[U] 🏠Unit</div>
                        <div className={"pButton"} onClick={() => setPVal('🌿')}>[G] 🌿Green Space</div>
                        <div className={"pButton"} onClick={() => setPVal('🪨')}>[W] 🪨️Walkway</div>
                        <div className={"pButton"} onClick={() => setPVal('⚡️')}>[S] ⚡️Solar Panel</div>
                        <div className={"pButton"} onClick={() => setPVal('🛋')}>[P] 🛋️Patio</div>
                        <div className={"pButton"} onClick={() => setPVal('🥕')}>[G] 🥕Garden</div>
                        <div className={"pButton"} onClick={() => setPVal('🔀')}>[R] 🔀Stairwell</div>
                        <div className={"pButton"} onClick={() => setPVal('🛗')}>[E] 🛗Elevator</div>
                        <div className={"pButton"} onClick={() => setPVal('🧺')}>[E] 🧺Laundry</div>
                    </div>

                    <div style={{width: "100%"}}>
                        <div style={{border: "10px solid lightseagreen", gap: 5, borderRadius: 14, backgroundColor: "#aaa8", width: 400, height: 400, display: "grid", gridTemplateColumns: `repeat(${sWidth * 2 + 1}, 1fr)`, gridTemplateRows: `repeat(${sHeight}, 1fr)`}}>
                            {twoRender}
                        </div>
                        <div style={{fontSize: 16, color: "lightgray"}}>{ `1402-A / ${zHeight - sTile.z > 1 ? `Lvl. ${zHeight - sTile.z - 1}` : "Ground Fl."} / Module ${sTile.x +1 }:${sTile.y +1 }`}</div>
                    </div>



                </div>
                { /* RIGHT SECTION FLEXBOX */ }
                <div style={{height: "100%", padding: 40}}>


                    Abstract: Design a sustainable building that can house 128 people by 2030.
                    Sustainability:
                    <ul>
                        <li>Plants of all kind love to be near the building edges. But humans and solar panels like that too!</li>
                        <li>Sunlight hits directly most of the year toward the module *:4 side, and then filters less and less through the building.</li>
                        <li>Solar panels are great, but too many on the top floor can trick birds into thinking it's water!</li>
                        <li>The elevator and stairwell must be placed on their corresponding upper and lower floors to work.</li>
                        <li>Both the elevator and the stairwell must be accessible to every module.</li>
                    </ul>


                </div>
            </div>
        </div>
    </>
  )
}
