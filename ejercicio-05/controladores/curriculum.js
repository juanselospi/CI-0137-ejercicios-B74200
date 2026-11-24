import curriculum from "../datos/curriculum.js";

export function mostrarCurriculum(req, res) {
  res.render("curriculum", curriculum);
}

export function recibirContacto(req, res) {
  const nombre = (req.body.nombre || "").trim();
  const correo = (req.body.correo || "").trim();
  const mensaje = (req.body.mensaje || "").trim();

  if (!nombre || !correo || !mensaje) {
    return res.redirect("/#contacto");
  }

  console.log("Mensaje nuevo de " + nombre + " (" + correo + "): " + mensaje);

  res.render("gracias", { nombre: nombre, correo: correo, mensaje: mensaje });
}
