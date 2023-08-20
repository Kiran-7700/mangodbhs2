const {
  addData,
  fetchData,
  salary,
  experience,
  graduationAndExperience,
  updateSalary,
  deleteLastCompany,
} = require("../controller/students");

const route = require("express").Router();

route.post("/addData", addData);
route.get("/fetchdata", fetchData);
route.get("/salary", salary);
route.get("/experience", experience);
route.get("/graduationAndExperience", graduationAndExperience);
route.get("/updateSalary", updateSalary);
route.get("/deleteLastCompany", deleteLastCompany);

module.exports = { route };
