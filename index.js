// CountEl is the 'h2' element..
let countEl = document.getElementById("count-el")
// SaveEl is the 'h3' element..
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count = count+=1
    countEl.textContent = count
}

function save() {
    let countString = count + " - "
    saveEl.textContent += countString
    countEl.textContent = 0
    count = 0
}

