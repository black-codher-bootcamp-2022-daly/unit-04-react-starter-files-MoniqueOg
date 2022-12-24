import React from "react";
import Wheel from "./Wheel";

export default function Transport(props) {
    const wheels = [];

    for (let i = 0; i < props.wheels; i++) {
        wheels.push("wheel-" + i);
    }

    return (
        <div>
            <h2>
                Hi, I am a {props.name} and I have {props.wheels} wheels
            </h2>

            {wheels.map((wheel) => (
                <Wheel key={wheel} />
            ))}
            <button onClick={props.scobedoo}>Click me</button>
        </div>
    );
            }
