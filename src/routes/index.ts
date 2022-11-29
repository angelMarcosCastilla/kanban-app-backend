import express from "express";
const Router = express.Router();
const pathRoutes = __dirname;
import fs from "fs";

const removeExtension = (fileName: string) => {
  return fileName.split(".").shift();
};

fs.readdirSync(pathRoutes).forEach((file) => {
  const fileWithRemovedExtension = removeExtension(file);
  if (fileWithRemovedExtension !== "index") {
    import(`./${fileWithRemovedExtension}`).then((module) => {
      Router.use(`/${fileWithRemovedExtension}`, module.Router);
    });
  }
});

export { Router };