const invitadosIniciales = [
  "Juan Pérez",
  "María López",
  "Carlos Díaz",
  "Ana Torres"
];

let contadorNuevos = 0;

const listaInv = document.getElementById("listaInvitados");
const llegados = document.getElementById("contadorLlegaron");
const pendientes = document.getElementById("contadorPendientes");
const nuevos = document.getElementById("contadorNuevos");

function crearItem(nombre, esNuevo = false) {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.textContent = nombre;

  checkbox.addEventListener("change", () => {
    li.classList.toggle("llego", checkbox.checked);
    actualizarContadores();
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  listaInv.appendChild(li);

  if (esNuevo) {
    contadorNuevos++;
    actualizarContadores();
  }
  actualizarContadores();
}

function actualizarContadores() {
  const total = listaInv.children.length;
  const llegadosCount = document.querySelectorAll("#listaInvitados input:checked").length;
  llegados.textContent = llegadosCount;
  pendientes.textContent = total - llegadosCount;
  nuevos.textContent = contadorNuevos;
}

// Agregar los iniciales
invitadosIniciales.forEach(nombre => crearItem(nombre));

// Formulario de nuevos
document.getElementById("formNuevo").addEventListener("submit", function (e) {
  e.preventDefault();
  const nuevo = document.getElementById("nuevoNombre");
  if (nuevo.value.trim() !== "") {
    crearItem(nuevo.value.trim(), true);
    nuevo.value = "";
  }
});
