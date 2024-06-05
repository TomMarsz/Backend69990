import { Router } from "express"
const router = Router()

const users = []

router.get("/", (req, res) => {
  res.json(users)
})

router.post("/", (req, res) => {
  const newUsers = req.body
  users.push(newUsers)
  res.json(users)
})

export default router