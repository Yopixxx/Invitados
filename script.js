// const lista = document.getElementById("lista");
// const form = document.getElementById("form");
// const input = document.getElementById("nombre");
// const totalSpan = document.getElementById("total");
// const llegadosSpan = document.getElementById("llegados");
// const nuevosSpan = document.getElementById("nuevos");
// const aunNoSpan = document.getElementById("aunno");

// let aforoMaximo = 150;
// let nuevosContador = 1;

// function actualizarContadores() {
//   const items = document.querySelectorAll(".item");
//   const total = items.length;
//   const llegados = [...items].filter(item => item.classList.contains("llego")).length;
//   const nuevos = [...items].filter(item => item.classList.contains("nuevo")).length;
//   const aunNo = total - llegados - nuevos;

//   totalSpan.textContent = total;
//   llegadosSpan.textContent = llegados;
//   nuevosSpan.textContent = nuevos;
//   aunNoSpan.textContent = aunNo;

//   // Cambia el color del aforo
//   const color = total <= 100 ? "green" : (total <= aforoMaximo ? "orange" : "red");
//   totalSpan.style.color = color;
// }

// function crearItem(nombre, esNuevo = false, yaLlego = false) {
//   const div = document.createElement("div");
//   div.classList.add("item");
//   if (esNuevo) {
//     div.classList.add("nuevo");
//     nombre = `${nombre} ${nuevosContador++}`;
//   }
//   const checkbox = document.createElement("input");
//   checkbox.type = "checkbox";
//   checkbox.checked = esNuevo || yaLlego;
//   const label = document.createElement("label");
//   label.textContent = nombre;

//   if (checkbox.checked) {
//     div.classList.add("llego");
//     div.style.color = esNuevo ? "orange" : "green";
//   } else {
//     div.style.color = "gray";
//   }

//   checkbox.addEventListener("change", () => {
//     div.classList.toggle("llego", checkbox.checked);
//     div.style.color = checkbox.checked
//       ? (div.classList.contains("nuevo") ? "orange" : "green")
//       : "gray";
//     guardarEstado();
//     actualizarContadores();
//   });

//   div.appendChild(checkbox);
//   div.appendChild(label);
//   lista.appendChild(div);
// }

// function guardarEstado() {
//   const datos = [];
//   document.querySelectorAll(".item").forEach(div => {
//     const label = div.querySelector("label").textContent;
//     const checked = div.querySelector("input").checked;
//     const esNuevo = div.classList.contains("nuevo");
//     datos.push({ nombre: label, check: checked, nuevo: esNuevo });
//   });
//   localStorage.setItem("invitados", JSON.stringify(datos));
// }

// function cargarDesdeStorage() {
//   const data = JSON.parse(localStorage.getItem("invitados") || "[]");
//   data.forEach(({ nombre, check, nuevo }) => {
//     if (nuevo) {
//       nuevosContador = Math.max(nuevosContador, parseInt(nombre.split(" ").slice(-1)[0]) + 1);
//     }
//     crearItem(nombre, nuevo, check);
//   });
//   actualizarContadores();
// }

// function cargarDesdeTXT() {
//   fetch("listainvitados.txt")
//     .then(resp => resp.text())
//     .then(text => {
//       const nombres = text.split("\n").map(n => n.trim()).filter(n => n);
//       nombres.forEach(nombre => crearItem(nombre, false, false));
//       guardarEstado();
//       actualizarContadores();
//     });
// }

// if (localStorage.getItem("listainvitados")) {
//   cargarDesdeStorage();
// } else {
//   cargarDesdeTXT();
// }

// form.addEventListener("submit", e => {
//   e.preventDefault();
//   const nombre = input.value.trim();
//   if (nombre) {
//     crearItem(nombre, true, true);
//     guardarEstado();
//     actualizarContadores();
//     input.value = "";
//   }
// });
