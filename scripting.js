let count = 0
let countEl = document.getElementById("countElement")
let saveEl = document.getElementById("saveElement")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let newCount = count + " + "
    saveEl.textContent += newCount
    count = 0
    countEl.textContent = 0
}

//TODO: Write a function that totals all the saved count (i.e newCount)
function totalAll() {

}