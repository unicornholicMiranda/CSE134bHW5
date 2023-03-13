var form = document.getElementById('form5')
var post = document.getElementById('postBtn');
var get = document.getElementById('getBtn');
var put = document.getElementById('putBtn');
var del = document.getElementById('deleteBtn');
var output = document.getElementById('response');
//var radios = 'input[type=radio][name="API"]';
var request = new XMLHttpRequest();

window.onload = function() {
    const now = new Date();
    const dateField = document.getElementById('date');
    dateField.value = now.toISOString();
};

post.addEventListener('click', (event) => {
    event.preventDefault();
    const id = document.getElementById('id').value;
    const an = document.getElementById('article_name').value;
    const ab = document.getElementById('article_body').value;
    const date = document.getElementById('date').value;
    const response =  fetch('https://httpbin.org/post', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id, article_name: an, article_body: ab,date})
        })
        .then(response => response.json())
        .then(data => {output.innerHTML = `<pre><textarea  style="width: 10cm; height:11cm" readonly>${JSON.stringify(data, null, 3)}</textarea></pre>`;})
});

get.addEventListener('click', (event) => {
    event.preventDefault();
    fetch(`https://httpbin.org/get`, { method: 'GET'})
    .then(response => response.json())
    .then(data => { output.innerHTML = `<pre><textarea style="width: 10cm; height:11cm" readonly>${JSON.stringify(data, null, 3)}</textarea></pre>`;})
});

put.addEventListener('click', (event) => {
    event.preventDefault();
    const id = document.getElementById('id').value; 
    const an = document.getElementById('article_name').value;
    const ab = document.getElementById('article_body').value;
    const date = document.getElementById('date').value;
    const response =  fetch(`https://httpbin.org/put?id=${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({article_name: an, article_body: ab, date})
    }) 
    .then(response => response.json())
    .then(data => {output.innerHTML = `<pre><textarea style="width: 10cm; height:11cm" readonly>${JSON.stringify(data, null, 3)}</textarea></pre>`;})
});

del.addEventListener('click', (event) => {
    event.preventDefault();
    const id = document.getElementById('id').value;
    fetch(`https://httpbin.org/delete?id=${id}`, { method: 'DELETE'})
    .then(response => response.json())
    .then(data => { output.innerHTML = `<pre><textarea style="width: 10cm; height:11cm" readonly>${JSON.stringify(data, null, 3)}</textarea></pre>`;})
});

/*
get.addEventListener('click', (event)=> {
    event.preventDefault();
    request.open('GET', 'https://httpbin.org/get');
    request.onload = function() {
        if (this.status == 200) {
            var data = this.responseText;
            data = JSON.parse(data);
            output.innerHTML = `<pre><textarea readonly>${JSON.stringify(data, null, 3)}</textarea></pre>`;
        } 
    };
    request.send();
});
*/
