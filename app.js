let inp= document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
btn.addEventListener("click",function(){
    let item= document.createElement("li");
    item.innerText=inp.value;
    let dltbtn = document.createElement("button");
    dltbtn.innerText="delete";
    dltbtn.classList.add("del");
    item.appendChild(dltbtn);
    
    ul.appendChild(item);
    inp.value="";

});
btn.addEventListener("click", function () {
    // your existing code...

    let dltbtns = document.querySelectorAll(".del");

    for (let delbtn of dltbtns) {
        delbtn.onclick = function () {
            delbtn.parentElement.remove();
        };
    }
});