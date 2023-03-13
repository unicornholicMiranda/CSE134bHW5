class ButtonCount extends HTMLElement{
    constructor() {
        super();
        let root = this.attachShadow({ mode: 'open' });
        let btn = document.createElement('button');
        let count = 0;
        btn.textContent = `Times Clicked: ${count}`;
        btn.addEventListener('click', () => {count++;btn.textContent = `Times Clicked: ${count}`;});
        root.appendChild(btn);
    }

}
customElements.define('button-count', ButtonCount);