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

  if (esNuevo) {
    contadorNuevos++;
    nombre += " " + contadorNuevos;
    li.classList.add("nuevo");
  }

  span.textContent = nombre;

  checkbox.addEventListener("change", () => {
    li.classList.toggle("llego", checkbox.checked);
    actualizarContadores();
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  listaInv.appendChild(li);

  actualizarContadores();
}

function actualizarContadores() {
  const items = listaInv.children;
  let totalIniciales = 0;
  let pendientesIniciales = 0;
  let llegadosCount = 0;

  for (let item of items) {
    const checkbox = item.querySelector("input[type=checkbox]");

    if (checkbox.checked) {
      llegadosCount++;
    }

    if (!item.classList.contains("nuevo")) {
      totalIniciales++;
      if (!checkbox.checked) {
        pendientesIniciales++;
      }
    }
  }

  llegados.textContent = llegadosCount;
  pendientes.textContent = pendientesIniciales;
  nuevos.textContent = contadorNuevos;

  // Aforo
  const aforoSpan = document.getElementById("contadorTotal");
  aforoSpan.textContent = llegadosCount;
  aforoSpan.classList.remove("gris", "verde", "naranja", "rojo");

  if (llegadosCount < 100) {
    aforoSpan.classList.add("gris");
  } else if (llegadosCount < 150) {
    aforoSpan.classList.add("verde");
  } else if (llegadosCount < 160) {
    aforoSpan.classList.add("naranja");
  } else {
    aforoSpan.classList.add("rojo");
  }
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
