import templatesController from "../controllers/template.controller.js"

function router(app) {
  app.use('/', templatesController)
}

export default router