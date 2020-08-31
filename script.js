// Selecting the important elements from the DOM
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");


// Function that returns the length of a input
function inputLength() {
    return input.value.length;
}

function listLength() {
    return li.length;
}

// Function to create a list-element
function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    // puts a delete-button on a new added list-element
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete!"));
    li.appendChild(btn);
    btn.onclick = removeParent;
}

// Function to create the delete-button
function deleteButton() {
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete!"));
    li[i].appendChild(btn);
    btn.onclick = removeParent;
}

// iterate over list to put delete-button next to every list-element
for (i=0; i<listLength();i++) {
    deleteButton();
}

// function to remove a list-element when clicked on the delete-button
function removeParent(event) {
    event.target.parentNode.remove();
}

// Function to add a list-element after a click on button
function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

// Function to add a list-element after pressing the enter-key 
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

ul.onclick = function(event) {
    var target = event.target;
    target.classList.toggle("done");
}




// Event Listener to listen to the click on the button
button.addEventListener("click", addListAfterClick);

// Event Listener to listen to the users input/pressed key 
// (the Enter Key has the keyCode 13)
input.addEventListener("keypress", addListAfterKeypress);