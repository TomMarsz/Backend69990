import moment from "moment";

const fechaActual = moment()

const fechaNacimiento = moment("1993-10-04")

if (fechaNacimiento.isValid()) {
  const diasPasados = fechaActual.diff(fechaNacimiento, "days")
  console.log(`Pasaron ${diasPasados} días desde mi nacimiento`);
} else {
  console.log("La fecha de nacimiento no es válida");
}