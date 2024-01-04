const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask()
{
    if(inputBox.value == '')
    {
        alert("Please enter a task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        // span.innerHTML = "X";
        // cross button

        // span.innerHTML = "X";
        span.innerHTML ="\u00D7";

        li.appendChild(span);
    }

    inputBox.value = '';
    saveData();

}


listContainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName == "SPAN")
    {
        e.target.parentElement.style.display = "none";
        saveData();
    }
} , false);


function saveData()
{
    localStorage.setItem("listContainer", listContainer.innerHTML);
}

function loadData()
{
    listContainer.innerHTML = localStorage.getItem("listContainer");
}

loadData();