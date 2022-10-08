import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import emojipedia from "./emojipedia";

ReactDOM.render(<App />, document.getElementById("root"));

const newEmojipedia = emojipedia.map(function(emojiEntry) {
    return emojiEntry.meaning.substring(0, 100);
});
console.log(newEmojipedia);

//Arrow functions
var numbers = [3, 23, 342, 32, 24];
const newNumbers = numbers.map(x => x * x);

console.log(newNumbers);
