import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => {
  return res.send("asd");
});

export default routes;
