import { Router } from "express";

const user = [
  { id: 1, name: "juan", last_name: "perez", email: "jperez@mail.com", pass: 123456 },
  { id: 2, name: "juan", last_name: "perez", email: "jperez@mail.com", pass: 123456 },
  { id: 3, name: "juan", last_name: "perez", email: "jperez@mail.com", pass: 123456 },
  { id: 4, name: "juan", last_name: "perez", email: "jperez@mail.com", pass: 123456 },
  { id: 5, name: "juan", last_name: "perez", email: "jperez@mail.com", pass: 123456 },
]

const router = Router()


router.get("/", (req, res) => {
  res.json({
    message: "ok",
    user: user
  })
})

router.post("/", (req, res) => {
  const { name, last_name, email, pass } = req.body
  if (!name || !last_name || !email || !pass) return res.status(404).json({ error: "Faltan datos" })
  let id = user[user.length - 1].id + 1
  user.push({ name, last_name, email, pass, id })
  res.status(201).json({ id })
})

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, last_name } = req.body;

  const userFound = user.find(u => u.id === id);

  if(userFound) {
    const index = user.findIndex(u => u.id === id);

    user[index] = { ...user[index], name, last_name }
    res.json({
      message: "Usuario actualizado con exito!",
      response: user[index]
    })
  } else {
    res.status(404).json({ error: "USUARIO NO ENCONTRADO"})
  }
})

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const userFound = user.find(u => u.id === id);

  if(userFound) {
    const index = user.findIndex(u => u.id === id);
    user.splice(index, 1)
    res.send("Usuario con id " + id + " eliminado con exito")
  } else {
    res.status(404).json({ error: "USUARIO NO ENCONTRADO"})
  }
})

router.get("/message", (req, res) => {
  res.json({ message: "Hola" })
})

router.get("*", (req, res) => {
  res.status(404).send("404")
})

export default router