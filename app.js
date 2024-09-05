const buttonElGoal = document.getElementById("goalButton");
const inputElGoal = document.getElementById("goalInput");
const listElGoal = document.getElementById("goalUl");

const buttonElPriority = document.getElementById("priorityButton");
const inputElPriority = document.getElementById("priorityInput");
const listElPriority = document.getElementById("priorityUl");

function addGoal() {
  const enteredValueGoal = inputElGoal.value;
  const listItemElGoal = document.createElement("li");
  listItemElGoal.textContent = enteredValueGoal;
  listElGoal.appendChild(listItemElGoal);
  inputElGoal.value = "";
}

function priorityAnyGoal() {
  const enteredValuePriority = inputElPriority.value;
  const listItemElPriority = document.createElement("li");
  listItemElPriority.textContent = enteredValuePriority;
  listElPriority.appendChild(listItemElPriority);
  inputElPriority.value = "";
}

buttonElGoal.addEventListener("click", addGoal);
buttonElPriority.addEventListener("click", priorityAnyGoal);

/* Her skal I lave en kopi af linje 18 og tilpasse kopien,
så det bliver til priority (prioritet) */
