function Main(){

    // n -> nothing
    // r -> residential
    // p -> plant/park
    // w -> water
    // s -> solar

    // g -> sustainable (green)
    // b -> neutral (blue)
    // p -> unsustainable (purple)

    let [simDate, setSimDate] = useState(new Date(new Date().getTime()));

    let zHeight = 4;
    let width = 4;
    let height = 4;

    let sWidth = 4;
    let sHeight = 4;

    let [TS, setTS] = useState(new Array(width * height * zHeight * sWidth * sHeight).fill('🌿'))

    let [ST, setST] = useState(new Array(width * height * zHeight).fill(false).map((val, i) => i === 0));


    let [sTile, setSTile] = useState({x: 0, y: 0, z: 0,});
    let twoRender = [];
    for (let i = 0; i < sWidth * sHeight; ++i){
        if (i % (width * 2) === 0 ) { twoRender.push(<div style={{width: "100%", height: "100%", /*border: "1px solid black", backgroundColor: "red"*/}}></div>); }
        twoRender.push(<div onClick={() => {let cpy = [...TS]; cpy[sTile.z * sWidth * sHeight * width * height + sTile.y * sWidth * sHeight * width + sTile.x * sWidth * sHeight + i] = '🌸'; setTS(cpy)}} style={{width: "100%", height: "100%", border: "1px solid black", backgroundColor: "lightblue", gridColumn: "span 2"}}>{TS[sTile.z * sWidth * sHeight * width * height + sTile.y * sWidth * sHeight * width + sTile.x * sWidth * sHeight + i]}</div>);
        if (i % (width * 2) === width * 2 - 1 ) {  twoRender.push(<div style={{width: "100%", height: "100%", /*border: "1px solid black", backgroundColor: "red"*/}}></div>); }
    }

    let toRender = [];
    for (let z = 0; z < zHeight; ++z){
        let zLayerBigTiles = new Array(width * height).fill(<div>empty</div>).map( (useless, i) => {
            let sArray = [];
            for (let w = 0; w< sWidth * sHeight; ++w) {
                if (w % (width * 2) === 0 ) { sArray.push(<div style={{width: "100%", height: "100%", /*border: "1px solid black", backgroundColor: "red"*/}}></div>); }
                sArray.push(<div style={{width: "100%", height: "100%", gridColumn: "span 2"}}>{TS[z * sWidth * sHeight * width * height + Math.floor(i / width) * sWidth * sHeight * width + i % width * sWidth * sHeight + w]}</div>);
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
        <div style={{width: "100vw", height: "30px", backgroundColor: "teal", display: "flex", flexFlow: "row nowrap", alignItems: "center", fontSize: 20}}>
            <div style={{color: "white"}}>{ `EcoBuilding 1402-A / ${zHeight - sTile.z > 1 ? `Lvl. ${zHeight - sTile.z - 1}` : "Ground Fl."} / Module ${sTile.x +1 }:${sTile.y +1 }`}</div>
            <div style={{width: 30}}></div>
            <div style={{color: "lightgøray"}}>Grøwax Isometric Editor Suite v1.0</div>
        </div>

        {/* OMNIPOTENT BACKGROUND */}
        <div style={{height: "calc(100vh - 30px)", backgroundImage: "url('./assets/bg.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
            {/* BACKGROUND BLUR + 3-PT FLEXBOX */}
            <div style={{height: "100%", width: "100%", display: "flex", flexDirection: "row", alignItems: "flex-start", backdropFilter: "blur(10px) grayscale(50%) contrast(20%)"}}>

                {/* ISOMETRIC BUILDING VIEW*/}
                <div style={{border: "1px solid teal", height: "100%", width: "575px", overflow: "scroll"}}>
                    {toRender}
                </div>

                {/* MIDDLE SECTION FLEXBOX */}
                <div style={{height: "100%", width: "600px", border: "1px solid teal", display: "grid", gridDirection: "column", gridTemplateRows: "1fr, 1fr 1fr" }}>


                    <div style={{height: "100%", backgroundColor: "#aaa8", borderRadius: 20, display: "grid", gridTemplateRows: "5fr 1fr"}}>
                        <div style={{display: "flex", padding: 20, flexFlow: "row nowrap",  borderBottom: "3px solid gray"}}><div style={{color: "white", fontSize: 40}}>{`${simDate.getHours() > 12 ? simDate.getHours() - 12 : simDate.getHours() === 0 ? 12 : simDate.getHours()}:${simDate.getMinutes()}${simDate.getMinutes() < 10 ? '0' : ''}`}</div><div>{simDate.getHours() > 12 ? "PM" : "AM"}</div><div style={{display: "flex", flexFlow: "column nowrap"}}><div>{simDate.toString()}</div><div>2026</div></div></div>
                        <div style={{display: "flex", justifyContent: "space-evenly", padding: 10}}><img onClick={() => setSimDate(new Date(simDate.getTime() - 86459179)) }  src={"./assets/fast_minus.svg"} className={"timeButton"} ></img><img onClick={() => setSimDate(new Date(simDate.getTime() - 1000 * 60 * 60 * 3)) } className={"timeButton"} src={"./assets/slow_minus.svg"}></img><img className={"timeButton"} src={"./assets/play.svg"}></img><img className={"timeButton"} src={"./assets/slow_plus.svg"}></img><img src={"./assets/fast_plus.svg"} className={"timeButton"}></img></div>
                    </div>
                    <div style={{padding: 30, height: "100%", display: "flex", justifyContent: "flex-start", alignItems: "flex-start",flexDirection: "column", color: "white", fontSize: 24, fontFamily: "monospace"}}>
                        <div>[X] Erase Tile</div>
                        <div>[U] 🏠Unit</div>
                        <div>[G] 🌿Green Space</div>
                        <div>[W] ⬜️Walkway</div>
                        <div>[S] ⚡️Solar Panel</div>
                        <div>[P] 🛋️Patio</div>
                        <div>[G] 🥕Garden</div>
                        <div>[R] 🔀Stairwell</div>
                        <div>[E] 🛗Elevator</div>
                        <div>[E] 🧺Laundry</div>
                        <button onClick={() => setSimDate(new Date(simDate.getTime() + 1000 * 60 * 60 * 24))}>{`${simDate.getHours()}:${simDate.getMinutes()}`}</button>
                    </div>
                    <div style={{display:"flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                        <div style={{fontSize: 20, color: "white"}}>{ `. / ${zHeight - sTile.z > 1 ? `Lvl. ${zHeight - sTile.z - 1}` : "Ground Fl."} / Module ${sTile.x +1 }:${sTile.y +1 }`}</div>
                        <div style={{padding: 10, gap: 5, borderBottom: "15px solid gray", borderRadius: 10, backgroundColor: "dodgerblue", width: 400, height: 400, display: "grid", gridTemplateColumns: `repeat(${sWidth * 2 + 1}, 1fr)`, gridTemplateRows: `repeat(${sHeight}, 1fr)`}}>
                            {twoRender}
                        </div>
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
