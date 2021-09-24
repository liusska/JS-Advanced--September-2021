function extractText() {
    const items = document.getElementById('items').children;

    const result = [...items].map((el) => el.textContent).join('\n');


    document.getElementById('result').textContent = result;
}