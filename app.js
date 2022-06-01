let savedLinks = [];
const inputEl = document.getElementById('input-el');
const linkDisplayEl = document.getElementById('link-display');
const ulEl = document.getElementById('ul-el');
const savedFromLocSt = JSON.parse(localStorage.getItem('savedLinks'));
console.log(savedFromLocSt);


if(savedFromLocSt) {
    savedLinks = savedFromLocSt;
    renderSavedLink(savedLinks);
}


// Add saved links to localStorage
document.getElementById('save-btn').addEventListener('click', () => {
    savedLinks.push(inputEl.value);
    inputEl.value = "";

    localStorage.setItem('savedLinks', JSON.stringify(savedLinks))
    renderSavedLink(savedLinks)
})


// Save current Tab
document.getElementById('tab-btn').addEventListener('click', () => {
    const currentUrl = window.top.location.href;
    savedLinks.push(currentUrl);
    localStorage.setItem('savedLinks', JSON.stringify(savedLinks));
    renderSavedLink(savedLinks);
})


// Delete saved links
document.getElementById('delete-btn').addEventListener('dblclick', () => {
    localStorage.clear();
    savedLinks = [];
    ulEl.innerHTML = "";
})


// Render savedLinks
function renderSavedLink(arr) {
    let listItems = ""
    for(let i = 0; i < arr.length; i++) {
        listItems += `
        <li>
            <a target='blank' href='${arr[i]}'> ${arr[i]} </a>
        </li>
        `
    }

    ulEl.innerHTML = listItems;
}