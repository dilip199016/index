// // // console.log(document.documentElement)
// // // console.log(document.body);
// // // console.log(document.hed);
// // // console.log(document.body.children);
// // for(node of document.body.children){
// //     console.log(document.body.children)
// // }
// // // console.log(document.body.childNodes);


// // // console.log(document.body.firstChild);
// // // console.log(document.body.lastChild);
// // // console.log(document.body.firstElementChild);
// // // console.log(document.body.lastElementChild);
// // const children=Array.from(document.body.children);
// // console.log(children);
// const ulTag=document.body.children[0];
// const firstLi=ulTag.children[0];
// const secondLi=ulTag.children[1];
// console.log(secondLi.previousElementSibling.textContent);
const eleme= document.getElementsByTagName("p")[0];
eleme.style.color="red"
eleme.style.backgroundColor="gold"
eleme.style.width="300px"
eleme.style.height="100px"
eleme.style.border='1.5px solid black';
eleme.style.borderRadius='15px'
eleme.style.alignItems="center"
eleme.style.textAlign="center";
eleme.style.padding="center"
eleme.style.display="flex;"
eleme.style.justifyContent="center";

const pElement=document.querySelector("p");
pElement.style.textShadow="25px"
pElement.style.display="flex";
pElement.style.display="center";
pElement.style.alignItems="center";
pElement.style.justifyContent="center";
pElement.style.color="green";
pElement.style.fontSize="25px";

// const ele=document.getElementsByClassName("bold")
// ele.getElementsByClassName(".bold")
console.log(eleme.innerText);
console.log(eleme.innerHTML);

const butn=document.getElementById("btn")
butn.style.backgroundColor="gold"
butn.style.width="90px";
butn.style.border="3px solid red"
butn.style.borderRadius="35px";
butn.style.fontSize="20px"










const elem=document.getElementsByTagName("p");
elem.onclick=function(){
    name:"Dilip" 
    School:"Newton"
};
console.log(elem);