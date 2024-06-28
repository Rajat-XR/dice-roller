let dicenum = document.querySelector("input");
const rollbtn = document.querySelector("#rollbtn");
let diceimg_container = document.querySelector("#dice");
let msg = document.querySelector("#msg");
let arr = ["dice/1.svg", "dice/2.svg", "dice/3.svg", "dice/4.svg", "dice/5.svg", "dice/6.svg"];
let num;
//let i = 0;
let min = 0;
let max = 5;
let user;
let image;

document.addEventListener("DOMContentLoaded", () => {
    rollbtn.onclick = () => {
        let msg_arr = [];
        diceimg_container.innerHTML = "";
        user = dicenum.value;
        for (let i = 0; i < user; i++) {
            num = Math.floor(Math.random() * (max - min) + min);
            image = document.createElement("img");
            image.src = arr[num];
            diceimg_container.appendChild(image);
            msg_arr[i] = num + 1;
        }
        let total = 0;
        for (let x of msg_arr) {
            total = total + x;
        }
        msg.innerHTML = `Dice Total: ${total}`;
    }
});