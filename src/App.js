import React from "react";

const Slot = (props) =>{
    // let x = props.x;
    // let y = props.y;
    // let z = props.z;

    let {x,y,z}=props;

    if( (x===y) && (y===z)){
        return (
            <>
                <div className="slot_inner">
                    <h1>{x}{y}{z}</h1>
                    <h1>This is Matching.</h1>
                    <hr />
                </div>
            </>
        )
    }else{
        return (
            <>
                <div className="slot_inner">
                    <h1>{x}{y}{z}</h1>
                    <h1>This is Not Matching.</h1>
                    <hr />
                </div>
            </>
        )
    }
}

const App = () =>{
    return(
        <>
            <h1 className="heading_style">
                Welcome to <span style={{fontWeight : 'bold'}}>Slot machine game</span> 
            </h1>
            <div className="slotmachine">
            <Slot x="😄" y="😄" z="😄"/>
            <hr />
            <Slot x="😁" y="😆" z="😅"/>
            <hr />
            <Slot x="🍎" y="🍌" z="🍎"/>
            <hr />
            <Slot x="🧁" y="🧁" z="🧁"/>
            <hr />
            </div>
        </>
    )
}

export default App;