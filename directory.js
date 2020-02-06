
function toggleForm() {
    let form = document.getElementById("form");

    if (form.style.display == "block") {
        form.style.display = "none";
    } else {
        form.style.display = "block";
    }
}

function add() {
    toggleForm();

    let artists = document.getElementById("artists");

    let name = document.getElementById('name').value;
    let about = document.getElementById('about').value;
    let url = document.getElementById('url').value;

    let outerDiv = document.createElement("div");
    outerDiv.className = "outerDiv";

    let innerDiv = document.createElement("div");
    innerDiv.className = "innerDiv";
    outerDiv.appendChild(innerDiv);

    let imgDiv = document.createElement("div");
    imgDiv.className = "imgDiv";
    innerDiv.appendChild(imgDiv);
    
    let textDiv = document.createElement("div");
    textDiv.className = "textDiv";
    innerDiv.appendChild(textDiv);
    
    let nameDiv = document.createElement("div");
    nameDiv.className = "nameDiv";
    textDiv.appendChild(nameDiv);
    
    let infoDiv = document.createElement("div");
    infoDiv.className = "infoDiv";
    textDiv.appendChild(infoDiv);

    let imgElement = document.createElement("img");
    imgElement.src = url;
    imgDiv.appendChild(imgElement);

    let nameElement = document.createElement("b");
    nameElement.innerText = name;
    nameDiv.appendChild(nameElement);

    let infoElement = document.createElement("p");
    infoElement.innerText = about;
    infoDiv.appendChild(infoElement);

    let deleteDiv = document.createElement("div");
    deleteDiv.className = "deleteArist";
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "deleteBtn";

    deleteBtn.onclick = function() {
        deleteBtn.parentNode.parentNode.parentNode.parentNode.removeChild(outerDiv);
    };

    deleteDiv.appendChild(deleteBtn);
    innerDiv.appendChild(deleteDiv);

    artists.appendChild(outerDiv);
}