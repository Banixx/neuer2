let funktiion = function () {
  hoi = "sali";
  let ele = document.getElementById("hoi");
  ele.innerHTML = "Hellou";
  console.log("knopf gedrückt");
};

let funktiion2 = function () {
  hoi2 = "sali2";
  let ele = document.getElementById("hoi");
  ele.innerHTML = "Hoi";
  console.log("knopf gedrückt2");
};

console.log("huihuiui");
knopf.addEventListener("click", funktiion);
knopf2.addEventListener("click", funktiion2);
