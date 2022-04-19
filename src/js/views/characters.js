import React from "react";
import { Card } from "../component/card";

export const Characters = ()=>{
    return <div className="container-fluid">
        <div className="banner">
            <img src='https://i.pinimg.com/originals/ab/c4/64/abc464f691135287b1bfb0c5431b3460.jpg'/>
            <h1> Characters</h1>
        </div>
        <div className="row">
            <Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/>
        </div>
    </div>
    
}