const miDiv = document.getElementById("miDiv");

// Cambia el texto
miDiv.textContent = "¡Texto Cambiado!";

// Cambia el color de fondo
miDiv.style.backgroundColor = "lightblue";

// Cambia el color del texto
miDiv.style.color = "darkblue";

// Cambia el tamaño de la fuente
miDiv.style.fontSize = "24px";

// Agrega una clase
miDiv.classList.add("activo");

/*
Con classList puedes:
- add() -> agregar clase
- remove() -> quitar clase
- toggle() -> agregar o quitar
*/