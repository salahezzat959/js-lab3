//& Task 1
function submit() {
    var inp=document.getElementById("task").value
    console.log(inp);
    document.createElement("li").innerHTML=inp
    var out=document.querySelector(".empty")
    // out.style.backgroundColor='green';
    out.innerHTML += inp;
    out.classList.add("emp");
    var deleteButton = document.createElement("button");
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add("butt")
    out.appendChild(deleteButton)
    deleteButton.onclick=function remove() {
    out.remove(); }
    
    var doneButton = document.createElement('button');
    doneButton.innerText = 'Done';
    doneButton.classList.add("butt")
    out.appendChild(doneButton)
    doneButton.onclick=function add() {
    out.style.backgroundColor='green';
}
}

// //& Task 2
var xhr = new XMLHttpRequest();
xhr.open("GET","./test.txt");
xhr.send("");
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
    console.log(xhr);
    document.querySelector(".testfile").innerHTML = "<h1>" + xhr.responseText
    }else{
        console.log("error")
    }
}
xhr.close()
