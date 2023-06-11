// import React from "react";
import { T_card } from "../interfaces";
const Card=({id,name,email}:T_card)=>(
    <div className="rounded-md text-center text-black transform transition duration-130 hover:scale-105 bg-green-300 p-3 m-4 shadow-md">
        <img src={`https://robohash.org/${id}200x200`} alt="robot"/>
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
);

export default Card;
