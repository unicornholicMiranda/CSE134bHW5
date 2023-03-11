

let postdialog = document.getElementById('postdialog');
let updatedialog = document.getElementById('updatedialog');
let deldialog = document.getElementById('deldialog');

const table = document.getElementById("posttable");
const postform = document.getElementById("form");

const titleinput = document.getElementById("title");
const dateinput = document.getElementById("date");
const suminput = document.getElementById("sum");
const titleinput2 = document.getElementById("title2");
const dateinput2 = document.getElementById("date2");
const suminput2 = document.getElementById("sum2");


var post = JSON.parse(localStorage.getItem("posts")) || [];
var curr = 0;


//refresh the post list, add new table rows and data, also add delete btn , edit button to each row
export function refreshPosts() {
    clear();
    table.innerHTML = "";
    for (let i = 0; i < post.length; i++) {
        const temp = post[i];
        const delbtn = document.createElement("button");
        const editbtn = document.createElement("button");
        delbtn.innerHTML = '<img src="1843344.png"/>';
        delbtn.addEventListener("click", () => {curr=i; showdel()});
        editbtn.innerHTML = '<img src="2541991.png"/>';
        editbtn.addEventListener("click", () => { curr=i; showpre(i);});
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");

        td1.textContent = temp.split("|")[0];
        td2.textContent = temp.split("|")[1];
        td3.textContent = temp.split("|")[2];
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(editbtn);
        tr.appendChild(delbtn);
        table.appendChild(tr);
    }
}
//save the post and add it to the posts list
export function save() {
    clear();
    post.push(`${titleinput.value} | ${dateinput.value} | ${suminput.value}`);
    titleinput.value = ""; 
    dateinput.value = "";
    suminput.value = "";
    localStorage.setItem("posts", JSON.stringify(post));
    refreshPosts();
}
//shwo the old data for the current post and replace with new input if has any
export function editf(index) {
    post[index] = `${titleinput2.value} | ${dateinput2.value} | ${suminput2.value}`;
    localStorage.setItem("posts", JSON.stringify(post));
    refreshPosts();
}
//delete the current post and regenerate the post list
export function delf(index) {
    clear();
    post.splice(index, 1);
    localStorage.setItem("posts", JSON.stringify(post));
    refreshPosts();
}
//return the current posts's index
function getcurr(){
    return curr;
}
//clear every dialog on the screen
function clear(){
    updatedialog.style.visibility="hidden";
    deldialog.style.visibility="hidden";
    postdialog.style.visibility = "hidden";
}
//show the delete dialog 
function showdel(){
    clear();
    deldialog.style.visibility="visible";
}
//show the edit dialog for the post selected, put the data saved for this post in the input for user to review
function showpre(index){
    clear();
    updatedialog.style.visibility="visible";
    const temp = post[index];
    titleinput2.value = temp.split("|")[0];
    dateinput2.value = temp.split("|")[1];
    suminput2.value = temp.split("|")[2];
}
//show the add dialog when add post button is clicked
export function showAdd(){
    clear();
    postdialog.style.visibility = "visible";
}

//save the posts when the form submit
postform.addEventListener("submit", (event) => { event.preventDefault(); save(); });
//save the changes to a post and update the post list when confirm is clicked
document.getElementById('confirm').addEventListener("click", (event) => { event.preventDefault(); editf(getcurr());});
//Cancle btns, do nothing
document.getElementById('cancle').addEventListener("click", (event) => { event.preventDefault(); clear();});
document.getElementById('cancle1').addEventListener("click", (event) => { event.preventDefault(); clear();});
document.getElementById('Cancle2').addEventListener("click", (event) => { event.preventDefault(); clear();});
//delete the selected post and update the localstorage when ok button clicked
document.getElementById('ok').addEventListener("click", (event) => { event.preventDefault(); delf(getcurr());});
//loead data from localstorage to retrieve the post array
window.addEventListener("load", () => {
    post = JSON.parse(localStorage.getItem("posts")) || [];
    refreshPosts();
});

document.getElementById('add').addEventListener("click", (event) => { event.preventDefault(); showAdd();});
