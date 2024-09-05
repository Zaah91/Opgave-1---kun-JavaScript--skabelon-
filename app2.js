const buttonElGoal = document.getElementById("goalButton");
const inputElGoal = document.getElementById("goalInput");
const listElGoal = document.getElementById("goalUl");

const inputElPriority = document.getElementById("priorityInput");
const listElPriority = document.getElementById("priorityUl");

function addGoal() {
  const enteredValueGoal = inputElGoal.value;
  const enteredValuePriority = inputElPriority.value;
  const listItemElGoal = document.createElement("li");
  const listItemElPriority = document.createElement("li");
  listItemElGoal.textContent = enteredValueGoal;
  listItemElPriority.textContent = enteredValuePriority;
  listElGoal.appendChild(listItemElGoal);
  inputElGoal.value = "";
  inputElPriority.value ="";
}

buttonElGoal.addEventListener("click", addGoal);

/* Her skal I lave en kopi af linje 18 og tilpasse kopien,
så det bliver til priority (prioritet) */
