function Main(){
    

    let [TZ, setTZ] = useState(0);
    let twoRender = [];
    for (let i = 0; i < width * height; ++i){
        if (i % (width * 2) === 0 ) { twoRender.push(<div style={{width: "100%", height: "100%", /*border: "1px solid black", backgroundColor: "red"*/}}></div>); }
        twoRender.push(<div style={{width: "100%", height: "100%", border: "4px outset black", backgroundColor: "dodgerblue", gridColumn: "span 2"}}>{board[TZ * width * height + i]}</div>);
        if (i % (width * 2) === width * 2 -1 ) {  twoRender.push(<div style={{width: "100%", height: "100%", /*border: "1px solid black", backgroundColor: "red"*/}}></div>); }
    }


    let zHeight = 4;
    let width = 4;
    let height = 4;
    let [board, setBoard] = useState([1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4,]);

    let toRender = [];
    for (let z = 0; z < zHeight; ++z){
        let ITR = []; // use new array later
        for (let i = z * width * height; i < (z + 1 ) * width * height; ++i) {
            ITR.push(<div onClick = {() => {board[i] = prompt("update"))}}className="tile">{board[i]}</div>)
        }

        toRender.push(<div style={{
            transform: "rotate(30deg)",
            // backgroundColor: "lightgray",
            display: "grid",
            gridTemplateColumns: `repeat(${width}, 100px`,
            gridTemplateRows: `repeat(${width}, 1fr`,
            border: "1px solid black",
            width: "300px",
            margin: 90,
        }}>
            {ITR}
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
                <div style={{width: 300, height: 300, display: "grid", gridTemplateColumns: `repeat ${width}, 1fr`, gridTemplateRows: `repeat ${height}, 1fr`}}>
                    {twoRender}
                </div>
            </div>
        </div>




    </div>
  )
}
