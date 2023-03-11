

export function Alert() {
    const output = document.getElementById("outputtag");
    const alertdialog1 = document.getElementById('alertdialog1');
    const confirmdialog1 = document.getElementById('confirmdialog1');
    const promtdialog1 = document.getElementById('promtdialog1');
    output.style.visibility = "hidden";
    alertdialog1.style.visibility = "visible";
    confirmdialog1.style.visibility="hidden";
    promtdialog1.style.visibility="hidden";
    document.getElementById("okbtn1").addEventListener("click", () => alertdialog1.style.visibility = "hidden");
}

export function Confirm() {
    const output = document.getElementById("outputtag");
    const alertdialog1 = document.getElementById('alertdialog1');
    const confirmdialog1 = document.getElementById('confirmdialog1');
    const promtdialog1 = document.getElementById('promtdialog1');
    output.style.visibility = "hidden";
    alertdialog1.style.visibility = "hidden";
    confirmdialog1.style.visibility = "visible";
    promtdialog1.style.visibility="hidden";

    document.getElementById("okbtn2").addEventListener("click", () => {
        confirmdialog1.style.visibility = "hidden";
        output.textContent = "The value returned by the confirm method is : true";
        output.style.visibility = "visible";
    });

    document.getElementById("canclebtn2").addEventListener("click", () => {
        confirmdialog1.style.visibility = "hidden";
        output.textContent = "The value returned by the confirm method is : false";
        output.style.visibility = "visible";
    });
}
  
export function Prompt() {
    const output = document.getElementById("outputtag");
    const alertdialog1 = document.getElementById('alertdialog1');
    const confirmdialog1 = document.getElementById('confirmdialog1');
    const promtdialog1 = document.getElementById('promtdialog1');
    output.style.visibility = "hidden";
    alertdialog1.style.visibility = "hidden";
    confirmdialog1.style.visibility = "hidden";
    promtdialog1.style.visibility="visible";
    

    document.getElementById("okbtn3").addEventListener("click", () => {
        let result = document.getElementById('userinput').value;
        promtdialog1.style.visibility = "hidden";
        if(result == null || result == ""){
            output.textContent = "User didn’t enter anything";
        }
        else{
            let result2 = DOMPurify.sanitize(result);
            output.innerHTML =`The value returned by the promt method is : ${result2}`;
        }
        output.style.visibility = "visible";
    });

    document.getElementById("canclebtn3").addEventListener("click", () => {
        promtdialog1.style.visibility = "hidden";
        output.textContent = "User didn’t enter anything";
        output.style.visibility = "visible";
    });
}
  