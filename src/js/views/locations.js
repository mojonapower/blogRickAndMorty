import React from "react";
import { Card } from "../component/card";

export const Locations = ()=>{
    return <div className="container-fluid">
        <div className="banner">
            <img src='https://tec.com.pe/wp-content/uploads/2018/10/rick-and-morty-season-3.jpg'/>
            <h1> Locations</h1>
        </div>
        <div className="row">
            <Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/>
        </div>
    </div>
}