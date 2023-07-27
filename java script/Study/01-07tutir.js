document.body.appendChild(root2);
// document.body.appendChild(root2);
// root2.style.color = "blue";

//  appendChild into the body

const box1 = document.createElement("div");
box1.className = "box1";
box1.id = "box_1";

document.body.appendChild(box1);

const box2 = document.createElement("div");

box2.style.background = "blue";
box2.style.width = "300px";
box2.style.height = "300px";
box2.style.border = "2px solid black";
box2.style.display = "flex";
box2.style.justifyContent = "center";
box2.style.alignItems = "center";
box2.id = "box_2";

box1.appendChild(box2);

const box3 = document.createElement("div");

box3.style.background = "yellow";
box3.style.width = "200px";
box3.style.height = "200px";
box3.style.border = "2px solid white";
box3.id = "box_3";
box3.style.display = "flex";
box3.style.justifyContent = "center";
box3.style.alignItems = "center";
box3.id = "box_2";

box2.appendChild(box3);

// span text
const spanText = document.createElement("span");
spanText.innerHTML = `<b style = "color:blue ">COOL!!!</b>`;
box3.appendChild(spanText);