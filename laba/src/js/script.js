let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName("budget-value"),
    daybudgetValue = document.getElementsByClassName("daybudget-value"),
    levelValue = document.getElementsByClassName("level-value"),
    expensesValue = document.getElementsByClassName("expenses-value"),
    optionalexpensesValue = document.getElementsByClassName("optionalexpenses-value"),
    incomeValue = document.getElementsByClassName("income-value"),
    monthsavingsValue = document.getElementsByClassName("monthsavings-value"),
    yearsavingsValue = document.getElementsByClassName("yearsavings-value"),


    expensesItem = document.getElementsByClassName("expenses-item"),
    expensesItemBtn = document.getElementsByTagName("button")[0],
    optionalexpensesBtn = document.getElementsByTagName("button")[1],
    countBudgetBtn = document.getElementsByTagName("button")[2],
    optionalexpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    chooseIncome = document.querySelector(".choose-income"),
    savings = document.querySelector(".savings"),
    chooseSum = document.querySelector(".choose-sum"),
    choosePercent = document.querySelector(".choose-percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");



    let money,
	time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", 1000);

	while (isNaN(money) || money == null || money == "") {
		money = +prompt("Ваш бюджет на месяц?", 1500);
	}

	time = prompt("Введите дату в формате YYYY-MM-DD");
	while (time == null || time == "") {
		time = prompt("Введите дату в формате YYYY-MM-DD");
	}

}
start();


let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,
	chooseExpenses : function(){
		for (let i = 0; i < 2; i++) {
			let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
				b = +prompt("Во сколько обойдется?", '');
	
			if ((typeof (a)) === "string" && typeof (a) !== null &&
				typeof (b) !== null && a !== "" && b !== "" && !isNaN(b)) {
				console.log("done");
				appData.expenses[a] = b;
			} else {
				console.log("EROR");
				i = i - 1;
			}
	
		}

	},
	detectDayBudget : function(){
		appData.moneyPerData = (appData.budget / 30).toFixed(1);
		alert("Ежедневный бюджет" + appData.moneyPerData);
	},
	detectLevelBudget : function(){
		if (appData.moneyPerData < 100) {
			console.log("Минимальный уровень дохода");
		} else if (appData.moneyPerData > 100 && appData.moneyPerData < 2000) {
			console.log("Средний доход");
		} else if (appData.moneyPerData > 2000) {
			console.log("Высокий доход");
		} else {
			console.log("eror");
		}
	},
	checkSavings : function(){
		if (appData.savings == true){
			let depozit = +prompt("Какой у вас депозит", 3000);
			 
			let percent = +prompt('Под какой процент?',1.3);
			 
				appData.manthInCome = depozit / 100 / 12 * percent;
				alert("Доход с вашего депозита за месяц: " + (appData.manthInCome).toFixed(1));
		  }
	},
	chooseOptExpenses : function (){
		for(let i = 0; i<3; i++){
			let questionOptExpenses = prompt("Статья необезательных расходов?", "");
			appData.optionalExpenses[i] = questionOptExpenses;
			
		}
	},

	chooseIncome : function (){
		let inputIncome;
	    inputIncome = prompt("Введите дополнительные способы дохода через ,");
         while (typeof(inputIncome) !== "string" || inputIncome == null || inputIncome == "") {
			 inputIncome = prompt("Введите дополнительные способы дохода через ,");
		 }
	   appData.income = inputIncome.split(", ");
	   appData.income.push(prompt("Может что то ещё?"));
	   appData.income.sort();

	   appData.income.forEach(function(item , i){
		   console.log((i+1) + ": Cпособ дополнительного дохода -- " + item);
	   });
	   
	},

	showMethods : function(){
		for(let key in appData){
			console.log("Наша программа включает в себя данные " + key + " --- " + appData[key]);
		}
	}
};

 

 







     
    

 