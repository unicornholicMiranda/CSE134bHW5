

let postdialog = document.getElementById('postdialog');
let updatedialog = document.getElementById('updatedialog');
let deldialog = document.getElementById('deldialog');

const list = document.getElementById("postlist");
const postform = document.getElementById("form");

const titleinput = document.getElementById("title");
const dateinput = document.getElementById("date");
const suminput = document.getElementById("sum");

const titleinput2 = document.getElementById("title2");
const dateinput2 = document.getElementById("date2");
const suminput2 = document.getElementById("sum2");

const test = document.getElementById("test");


var post = JSON.parse(localStorage.getItem("posts1")) || [];
let curr = 0;



export function renderPosts() {
    updatedialog.style.visibility="hidden";
    deldialog.style.visibility="hidden";
    postdialog.style.visibility = "hidden";
    list.innerHTML = "";
    for (let i = 0; i < post.length; i++) {
        const temp = post[i];
        const li = document.createElement("li");
        const delbtn = document.createElement("button");
        const editbtn = document.createElement("button");
        li.textContent = temp;

        delbtn.textContent = "Delete";
        delbtn.addEventListener("click", () => {curr=i; showdel()});

        editbtn.textContent = "Edit";
        editbtn.addEventListener("click", () => { curr=i; showpre(i);});

        li.appendChild(editbtn);
        li.appendChild(delbtn);
        list.appendChild(li);
    }
}

function getcurr(){
    return curr;
}

export function save() {
    updatedialog.style.visibility="hidden";
    deldialog.style.visibility="hidden";
    postdialog.style.visibility = "hidden";
    post.push(`${titleinput.value} | ${dateinput.value} | ${suminput.value}`);
    titleinput.value = ""; 
    dateinput.value = "";
    suminput.value = "";
    localStorage.setItem("posts1", JSON.stringify(post));
    renderPosts();
    
}

function showdel(){
    updatedialog.style.visibility="hidden";
    postdialog.style.visibility = "hidden";
    deldialog.style.visibility="visible";
}

export function delf(index) {
    updatedialog.style.visibility="hidden";
    postdialog.style.visibility = "hidden";
    deldialog.style.visibility="hidden";
    post.splice(index, 1);
    localStorage.setItem("posts1", JSON.stringify(post));
    renderPosts();
}

function showpre(index){
        updatedialog.style.visibility="visible";
    deldialog.style.visibility="hidden";
    postdialog.style.visibility = "hidden";
        const temp = post[index];
        titleinput2.value = temp.split("|")[0];
        dateinput2.value = temp.split("|")[1];
        suminput2.value = temp.split("|")[2];
}

export function editf(index) {
    post[index] = `${titleinput2.value} | ${dateinput2.value} | ${suminput2.value}`;
    localStorage.setItem("posts1", JSON.stringify(post));
    renderPosts();
}

postform.addEventListener("submit", (event) => { 
    event.preventDefault();
    save();
});

document.getElementById('confirm').addEventListener("click", (event) => { 
    event.preventDefault();
    editf(getcurr());
});

document.getElementById('cancle1').addEventListener("click", (event) => { 
    event.preventDefault();
    updatedialog.style.visibility="hidden";
    deldialog.style.visibility="hidden";
    postdialog.style.visibility = "hidden";
});

document.getElementById('Cancle2').addEventListener("click", (event) => { 
    event.preventDefault();
    updatedialog.style.visibility="hidden";
    deldialog.style.visibility="hidden";
    postdialog.style.visibility = "hidden";
});

document.getElementById('ok').addEventListener("click", (event) => { 
    event.preventDefault();
    delf(getcurr());
});

export function cancle(){
    updatedialog.style.visibility="hidden";
    postdialog.style.visibility = "hidden";
    deldialog.style.visibility="hidden";
}

export function start(){
    updatedialog.style.visibility="hidden";
    deldialog.style.visibility="hidden";
    postdialog.style.visibility = "visible";
}

document.getElementById('cancle').addEventListener("click", (event) => {
     event.preventDefault();
     updatedialog.style.visibility="hidden";
postdialog.style.visibility = "hidden";
deldialog.style.visibility="hidden";
});

window.addEventListener("load", () => {
    post = JSON.parse(localStorage.getItem("posts1")) || [];
    renderPosts();
});
