import React from "react";

export default function ClickerCounter({ number }) {
    if ({ number }) {
        return <div>Counter: {number > 1 ? "Ой!" : number}</div>;
    } else return <div>Counter: {number > 5 ? "Упс!" : number}</div>;
}
