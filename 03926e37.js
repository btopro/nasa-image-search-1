import"../../../../../src/NasaImageSearch.js";document.getElementById("dataOnly").addEventListener("change",(e=>{e.currentTarget.checked?document.querySelector("#images").listOnly=!0:document.querySelector("#images").listOnly=!1})),document.querySelector("#getData").addEventListener("click",(e=>{document.querySelector("#images").name=document.querySelector("#load").value,document.querySelector("#images").page=document.querySelector("#page").value,document.querySelector("#images").year_start=document.querySelector("#start").value,document.querySelector("#images").year_end=document.querySelector("#end").value}));