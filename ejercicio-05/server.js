import express from "express";
import rutasCurriculum from "./rutas/curriculum.js";

const app = express();
const puerto = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", "./vistas");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use("/", rutasCurriculum);

app.use(function (req, res) {
  res.status(404).render("404", { ruta: req.originalUrl });
});

app.listen(puerto, function () {
  console.log("Servidor corriendo en http://localhost:" + puerto);
});
