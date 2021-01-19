var pegaValor200 = document.querySelector("#copo200");
var pegaValor500 = document.querySelector("#copo500");
var pegaValor1000 = document.querySelector("#garrafa1000");

pegaValor200.addEventListener('click', add200);
pegaValor500.addEventListener('click', add500);
pegaValor1000.addEventListener('click', add1000);


var copo200 = 0;
var copo500 = 0;
var garrafa1000 = 0;

function add200(){
	copo200+=200;
	recebeValor200.innerHTML = copo200;
	localStorage.setItem('copo200', copo200);
}
function add500(){
	copo500+=500;
	recebeValor500.innerHTML = copo500;
	localStorage.setItem('copo500', copo500);
}
function add1000(){
	garrafa1000+=1000;
	localStorage.setItem('garrafa1000', garrafa1000);
	recebeValor1000.innerHTML = garrafa1000;
	
}

soma1 = localStorage.getItem('copo200');
soma2 = localStorage.getItem('copo500');
soma3 = localStorage.getItem('garrafa1000');

total = soma1 + soma2 + soma3;
console.log(total);
