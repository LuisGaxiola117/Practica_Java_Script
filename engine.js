
function agregarElemento() {
    event.preventDefault();
    var input = document.getElementById("input").value;
    

    var li = document.createElement("li");
    li.textContent = input;

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    

    li.appendChild(checkbox);

    var miLista = document.getElementById("miLista").querySelector("ul");
    miLista.appendChild(li);
    

    document.getElementById("input").value = "";
}
