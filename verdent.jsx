function Main(){

    // n -> nothing
    // r -> residential
    // p -> plant/park
    // w -> water
    // s -> solar

    // g -> sustainable (green)
    // b -> neutral (blue)
    // p -> unsustainable (purple)


    let zHeight = 4;
    let width = 4;
    let height = 4;

    let sWidth = 4;
    let sHeight = 4;

    let [TS, setTS] = useState(new Array(width * height * zHeight * sWidth * sHeight).fill('n'))


    let [sTile, setSTile] = useState({x: 0, y: 0, z: 0,});
    let twoRender = [];
    for (let i = 0; i < sWidth * sHeight; ++i){

        if (i % (width * 2) === 0 ) { twoRender.push(<div style={{width: "100%", height: "100%", /*border: "1px solid black", backgroundColor: "red"*/}}></div>); }
        twoRender.push(<div style={{width: "100%", height: "100%", border: "1px solid black", backgroundColor: "lightblue", gridColumn: "span 2"}}>{TS[sTile.z * sWidth * sHeight * width * height + sTile.y * sWidth * sHeight * width + sTile.x * sWidth * sHeight + i]}</div>);
        if (i % (width * 2) === width * 2 - 1 ) {  twoRender.push(<div style={{width: "100%", height: "100%", /*border: "1px solid black", backgroundColor: "red"*/}}></div>); }
    }

    let toRender = [];
    for (let z = 0; z < zHeight; ++z){
        let zLayerBigTiles = new Array(width * height).fill(<div>empty</div>).map( (useless, i) =>
            <div onClick = {() => { setSTile({x: i % width, y: Math.floor(i / width), z: z}); alert(`You clicked ${i % width}, ${Math.floor(i / width)}, ${z}!`); }} className="tile">
                nnnn nnnn nnnn nnnn
            </div>
        );

        toRender.push(<div style={{
            transform: "rotate(30deg)",
            backgroundColor: "lightgray",
            display: "grid",
            gridTemplateColumns: `repeat(${width}, 100px)`,
            gridTemplateRows: `repeat(${width}, 1fr)`,
            border: "1px solid black",
            width: "300px",
            margin: 90,
        }}>
            {zLayerBigTiles}
        </div>);
    }


  return (
    <div style = {{ margin: 0, padding: 0, boxSizing: "border-box", fontFamily: "sans-serif",}}>
        {/*<button onClick={ () => updateState(0, 0) }>us</button>*/}
        <div style={{width: "100vw", height: "30px", backgroundColor: "teal", color: "gold", textAlign: "center"}}>Hexacity</div>
        {/*<div style={{height: "200px"}}></div>*/}

        <div style={{height: "calc(100vh - 30px)", display: "flex", flexDirection: "row", alignItems: "flex-start"}}>
            <div style={{border: "1px solid teal", height: "100%", width: "575px", overflow: "scroll"}}>
                {toRender}
            </div>
            <div style={{height: "100%", width: "600px", border: "1px solid teal", display:"flex", justifyContent: "center", alignItems: "center"}}>
                <div style={{padding: 10, gap: 5, backgroundColor: "dodgerblue", width: 300, height: 300, display: "grid", gridTemplateColumns: `repeat(${sWidth * 2 + 1}, 1fr)`, gridTemplateRows: `repeat(${sHeight}, 1fr)`}}>
                    {twoRender}
                </div>
            </div>
        </div>
    </div>
  )
}
