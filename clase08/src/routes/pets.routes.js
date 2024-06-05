import { Router } from "express"
const router = Router()

const pets = []

router.get("/", (req, res) => {
  res.json(pets)
})

router.post("/", (req, res) => {
  const newPet = req.body
  pets.push(newPet)
  res.json(pets)
})

export default router