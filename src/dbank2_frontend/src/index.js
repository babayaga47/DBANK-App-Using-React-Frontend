import { dbank2_backend } from "../../declarations/dbank2_backend";

window.addEventListener("load", async function () {
  // console.log("Finished loading");

  update();

}); 

document.querySelector("form").addEventListener("submit", async function (event) {
  event.preventDefault();
  // console.log("Submitted...");
  const button = event.target.querySelector("#submit-btn");
  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);

  button.setAttribute("disabled", true);
    
  if (document.getElementById("input-amount").value.length != 0) {
     await dbank2_backend.topUp(inputAmount);
  }

   if (document.getElementById("withdrawal-amount").value.length != 0) {
     await dbank2_backend.topDown(outputAmount);
  }

  update();
   
  

  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawal-amount").value = "";

  button.removeAttribute("disabled");
});

async function update() {
  const currentAmount = (await dbank2_backend.checkBalance()).toFixed(2) ;
  document.getElementById("value").innerHTML = currentAmount;
}