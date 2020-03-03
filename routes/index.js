var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res) {
  res.render("index", { title: "Express", page: "login" });
});

router.get("/profile", (req,res)=>{
  const months=["Enero", "Febrero","Marzo","Abril", "Mayo", "Junio", "Julio","Agosto","Septiembre","Octubre", "Noviembre", "Diciembre"];
  const espaciados=[2,5,6,2,4,0,2,5,1,3,6,1];
  const hoy = new Date();
  let dias = [];
  let num = new Date(hoy.getFullYear(),hoy.getMonth()+1,0).getDate();
  console.log(num);
  for (let index = 0; index < espaciados[hoy.getMonth()]; index++) {
    dias.push("");
    
  }
  for (let index = 1; index <= num ; index++) {
    dias.push(index);    
  }
  const calendar={
    month:months[hoy.getMonth()], 
    day:hoy.getDate(), 
    days:dias,  
  };
  const user ={
    genero:0,
    altura: 156,
    peso: 60,
    edad: 22
  };
  res.render("index", { title: "Express", page: "profile", calendar:calendar, user:user  });
});

router.get("/biblioteca",(req,res)=>{

  res.render("index", { title: "Express", page: "biblioteca" });
});
module.exports = router;
