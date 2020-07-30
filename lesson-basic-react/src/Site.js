import React from "react";

export default function Site({ number }) {
  return (
  <div>Counter {number > 1 ? "Ой!" : number}</div>
)
}
