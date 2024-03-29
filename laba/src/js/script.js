let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName("budget-value")[0],
    daybudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalexpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthsavingsValue = document.getElementsByClassName("monthsavings-value")[0],
    yearsavingsValue = document.getElementsByClassName("yearsavings-value")[0],


    expensesItem = document.getElementsByClassName("expenses-item"),
    expensesItemBtn = document.getElementsByTagName("button")[0],
    optionalexpensesBtn = document.getElementsByTagName("button")[1],
    countBudgetBtn = document.getElementsByTagName("button")[2],
    optionalexpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    chooseIncome = document.querySelector(".choose-income"),
    savings = document.querySelector("#savings"),
    chooseSum = document.querySelector(".choose-sum"),
    choosePercent = document.querySelector(".choose-percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");

	expensesItemBtn.disabled = true;
	optionalexpensesBtn.disabled = true;
	countBudgetBtn.disabled = true;

    let money, time;

  startBtn.addEventListener("click", function(){

    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt("Ваш бюджет на месяц?", '');

    while (isNaN(money) || money == '' || money == null) {
        money = prompt("Ваш бюджет?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
	dayValue.value = new Date(Date.parse(time)).getDate();
	
	expensesItemBtn.disabled = false;
	optionalexpensesBtn.disabled = false;
	countBudgetBtn.disabled = false;
});

 
expensesItemBtn.addEventListener("click", function(){
	let sum = 0;

 	for (let i = 0; i < expensesItem.length; i++) {
		let a =  expensesItem[i].value,
			b = expensesItem[++i].value;

		if ((typeof (a)) === "string" && typeof (a) !== null &&
			typeof (b) !== null && a !== "" && b !== "" && !isNaN(b)) {
			console.log("done");
			appData.expenses[a] = b;
 			sum += +b;
 		} else {
			console.log("EROR");
			i = i - 1;
		}
        expensesValue.textContent = sum;
	}
      
});

optionalexpensesBtn.addEventListener("click", function(){
	for(let i = 0; i < optionalexpensesItem.length; i++){
		let opt = optionalexpensesItem[i].value;
		appData.optionalExpenses[i] = opt;
		optionalexpensesValue.textContent += appData.optionalExpenses[i] + ", ";
	}
});

countBudgetBtn.addEventListener("click", function(){
    if (appData.budget != undefined){
	appData.moneyPerData = ((appData.budget - expensesValue.textContent)/ 30).toFixed(1);
		 daybudgetValue.textContent = appData.moneyPerData;


		 if (appData.moneyPerData < 100) {
			levelValue.textContent = "Минимальный уровень дохода";
		} else if (appData.moneyPerData > 100 && appData.moneyPerData < 2000) {
			levelValue.textContent = "Средний доход";
		} else if (appData.moneyPerData > 2000) {
			levelValue.textContent = "Высокий доход";
		} else {
			console.log("eror");
		}
	}else{
		daybudgetValue.textContent = "Error";
	}
});


chooseIncome.addEventListener("input", function(){
	let items = chooseIncome.value;
	appData.income = items.split(",");
	incomeValue.textContent = appData.income;
});

savings.addEventListener("click", function(){
    if( appData.savings == true){
		appData.savings = false
	}else { 
		appData.savings = true;
	}
});
 
chooseSum.addEventListener("input", function(){
  if(appData.savings == true){
  let sum = +chooseSum.value;
  let percent = +choosePercent.value;
  appData.manthInCome = sum / 100 / 12 * percent;
  appData.yearInCome = sum / 100 * percent;
  monthsavingsValue.textContent = appData.manthInCome.toFixed(1);
  yearsavingsValue.textContent = appData.yearInCome.toFixed(1);


  }
});

choosePercent.addEventListener("input", function(){
	if(appData.savings == true){
		let sum = +chooseSum.value;
		let percent = +choosePercent.value;
		appData.manthInCome = sum / 100 / 12 * percent;
		appData.yearInCome = sum / 100 * percent;
		monthsavingsValue.textContent = appData.manthInCome.toFixed(1);
		yearsavingsValue.textContent = appData.yearInCome.toFixed(1);
	  
	  
		}
});

 

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,

};

 
for(let key in appData){
	console.log("Наша программа включает в себя данные " + key + " --- " + appData[key]);
}






     
    

 