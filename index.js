const btn7 = document.querySelector('#number7');
const btn7function = () => {return 7;};
btn7.addEventListener('click', btn7function);
const result = btn7function();
document.getElementById("resultInfo").innerHTML = result;