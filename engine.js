
function moverElemento(checkbox) {
    // Obtén el elemento padre (li) del checkbox
    const listItem = checkbox.parentElement;
    
    // Crea una nueva lista y mueve el elemento a ella
    const otraLista = document.getElementById("otraLista");
    otraLista.appendChild(listItem);
}

function agregarElemento() {
    event.preventDefault();
    const input = document.getElementById("input").value;

    const li = document.createElement("li");
    li.textContent = input;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function() {
        moverElemento(this);
    };

    li.appendChild(checkbox);

    const miLista = document.getElementById("miLista").querySelector("ul");
    miLista.appendChild(li);

    document.getElementById("input").value = "";
}


