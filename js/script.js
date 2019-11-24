'use strict';

/*console.log(4 / 0);

let persone = {
	name: "Karl",
	surname: "Logun",
	age: 22,
	isMaried: true,
	work: "programmer"

};

console.log(persone.isMaried);
console.log(persone.name);
console.log(persone.work);
console.log(persone["age"]);
console.log(persone["surname"]);

let arr = ['log.png', 'main.jpg', 'footer.psd'];

console.log(arr[2]);

let answer = confirm("Are you here?");
console.log(answer);
if (answer == 1) {
	alert("true");
} else {
	alert("false");
}

 let answerAge = prompt("Есть ли вам 18 лет?(да/нет)", "Да");

console.log(answerAge);
console.log(typeof(null));
*/
// TASK 1 
/*
let money = prompt("Ваш бюджет на месяц", 1500);
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

let answer1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	answer2 = prompt("Во сколько обойдется", ''),
	answer3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	answer4 = prompt("Во сколько обойдется", '');

appData.expenses.answer1 = answer2;
appData.expenses.answer3 = answer4;
alert(appData.budget / 30);
*/


// if else 
/*
let number = 20;

if (number < 49) {
	console.log("no");
} else if (number > 100) {
	console.log("false");
} else {
	console.log("true");
}
 
(number == 122) ? console.log(true) : console.log(false);

let a = 2+1;

switch (a){
	case 3: 
		console.log("мало");
		break;
	case 4:
		console.log("Оно");
		break;
	case 5:
		console.log("Много");
		break;
	default:
		console.log("eror");
		break;	

}

 */
// task 2
/*
let money = +prompt("Ваш бюджет на месяц", '');
let time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

*/

/*for (let i = 0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется", '');

	if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
		console.log("done");
		appData.expenses[a] = b;
	} else {

	}
}
*/

/*let i =0;
while (i<2) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется", '');

	if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
		console.log("done");
		appData.expenses[a] = b;
	} else {

	}	
	i++;
}
*/

/*
let i = 0 ;

do{
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется", '');

	if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
		console.log("done");
		appData.expenses[a] = b;
	} else {

	}	
	i++;
}while (i<2) {
	
}
appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюджет' + appData.moneyPerDay);

if (appData.moneyPerDay < 100){
	console.log("Миимальный бюджет");
}else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ){
	console.log("Средний бюджет");
}else if (appData.moneyPerDay > 2000){
	console.log("Выше среднего");
}else{
	console.log("Eror404");
}
 */

/*
function calc(a,b){
  return(a+b);
}
console.log(calc(2,3));
console.log(calc(2,10));
*/

/*
let ask = (question,yes,no) => {
	(confirm(question))	? yes: no;
	return question;
}

  ask(
	confirm("Вы согласны?"),
	() => alert("Вы согласились."),
	() => alert("Вы отменили выполнение.")
  );
  */
//    
//                task 3
/*
let money,
	time;

function start() {
	money = +prompt("Ваш бюджет на месяц", '');
	time = prompt("Введите дату в формате YYYY-MM-DD", '');

	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц", '');
	}

}
start();

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true
};


function chooseExpenses() {
	for (let i = 0; i < 2; i++) {
		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется", '');

		if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
			console.log("done");
			appData.expenses[a] = b;
		} else {

		}
	}
}
chooseExpenses();

function detectDayBudget() {
	appData.moneyPerDay = (appData.budget / 30).toFixed(1);

	alert('Ежедневный бюджет' + appData.moneyPerDay);


}
detectDayBudget();

function detectLevel() {
	if (appData.moneyPerDay < 100) {
		console.log("Миимальный бюджет");
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		console.log("Средний бюджет");
	} else if (appData.moneyPerDay > 2000) {
		console.log("Выше среднего");
	} else {
		console.log("Eror404");
	}
}

detectLevel();

function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt("Склько у вас збережений", ''),
			percent = +prompt("Под какой процент");
		appData.manthInCome = save / 100 / 12 * percent;
		alert("Доход с вашего депозита за месяц: " + (appData.manthInCome).toFixed(1));

	}

}
checkSavings();

function chooseOptExpenses() {
	for (let i = 1; i <= 3; i++) {
		let questionOptExpenses = prompt("Статья необязательных расходов?", '');
		appData.optionalExpenses[i] = questionOptExpenses;
		console.log(appData.optionalExpenses);
	}
}
chooseOptExpenses();
*/
/*
function SumMatrix(A,B)       
{   
    var m = A.length, n = A[0].length, C = [];
    for (var i = 0; i < m; i++)
     { C[ i ] = [];
       for (var j = 0; j < n; j++) C[ i ][j] = A[ i ][j]+B[ i ][j];
     }
	return C;
	console.log(c);
}
 
SumMatrix();
*/

/* function first() {
	// что то делает
	setTimeout(function () {
		console.log(1);
	}, 500);
}

function second(){
	console.log(2);
}

first();
second(); 


function learnJS (lang, callback){
	console.log("I am learnig: " + lang);
	callback();
}
 learnJS("JavaScript", first); */
// Обьекты 
/* let options = {
	width: 1024,
	height: 1024,
	name: "Hp",
};

console.log(options.width);
options.bool = false;
console.log(options.bool);

options.colors = {
	border: "red",
	bg: "white"
};
delete options.bool;
console.log(options);

for (let key in options){
	console.log('Свойство '+ key + ' имеет значение ' + options[key]);
}
console.log(Object.keys(options.colors)); */

/* let arr = [1, 2, 3, 4, 5];

arr.pop();
arr.push('5');
arr.shift();
arr.unshift('1');

 for(let i = 0; i < arr.length; i++){
	arr[100] = 100;
	console.log(arr[i]);
} 

 console.log(arr); 

arr.forEach(function(item, i, mass){
	console.log(i + ': ' + item + " ( массив: " + mass + ' )');
}); */

/* let arr = [1, 2, 4, 6, 9];

for(let key of arr){
	console.log(key);
} */

/* let answer  = prompt("" , ""),
	arr = [];
arr = answer.split(',');

 for(let key of arr){
	 console.log(key);
 } */

/* let arr = ['asda', 'asdas', '1332312'],
	i = arr.join(", ");
console.log(i); */
/* let arr = ['asda', 'asdas', '1332312', 'lol', 'masdad', 'cacac'],
	i = arr.sort();
console.log(arr); */

/* let arr = [123,121,321,444],
	i = arr.sort(compareNumber);
	function compareNumber(a,b){
		return a-b;
	}
console.log(arr); */

/* let solider = {
	health: 200,
	armor: 150,
	weapons: 150
};
let john = {
	health: 150
};

john.__proto__ = solider;

console.log(john);
console.log(john.armor + " , " + john.weapons); */


/// 4 task
/* let money,
	time;

function start() {
	money = +prompt("Ваш бюджет на месяц", '');
	time = prompt("Введите дату в формате YYYY-MM-DD", '');

	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц", '');
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
	chooseExpenses: function(){
		for (let i = 0; i < 2; i++) {
			let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
				b = prompt("Во сколько обойдется", '');
	
			if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
				console.log("done");
				appData.expenses[a] = b;
			} else {
	
			}
		}

	},
	detectDayBudget: function(){
		appData.moneyPerDay = (appData.budget / 30).toFixed(1);

		alert('Ежедневный бюджет' + appData.moneyPerDay);
	},
	detectLevel: function(){
		if (appData.moneyPerDay < 100) {
			console.log("Миимальный бюджет");
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log("Средний бюджет");
		} else if (appData.moneyPerDay > 2000) {
			console.log("Выше среднего");
		} else {
			console.log("Eror404");
		}

	},
	checkSavings: function(){
		if (appData.savings == true) {
			let save = +prompt("Склько у вас збережений", ''),
				percent = +prompt("Под какой процент");
			appData.manthInCome = save / 100 / 12 * percent;
			alert("Доход с вашего депозита за месяц: " + (appData.manthInCome).toFixed(1));
	
		}
		
	},
	chooseOptExpenses: function(){
		for (let i = 1; i <= 3; i++) {
			let questionOptExpenses = prompt("Статья необязательных расходов?", '');
			appData.optionalExpenses[i] = questionOptExpenses;
			console.log(appData.optionalExpenses);
		}
	},

	chooseIncome: function(){
		let item = prompt("Введите дополнительные способы дохода (ввод черес запятую)", "");
         while (typeof(item) != "string" || item == "" || typeof(item) == null) {
			let item = prompt("Введите дополнительные способы дохода (ввод черес запятую)", "");
		 }
		 
		appData.income = item.split(", ");
		appData.income.push(prompt("Может чтото ещё?"));
		appData.income.sort();
	
      appData.income.forEach(function(item, i){
      alert("Способы доп. заработка: " + (i+1) + " - " + item);
	  });
	}
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
} */

/* let arr = [4, 3, 5, 8, 11, 9, 22],
	i = arr.sort(compareNumber);

function compareNumber (a, b){
	return a-b;
}	

console.log(arr); */

/*  for ( let i = 0; i <=10; i++){
	console.log(i);
}  */

/* let calculator = {
	sum() {
	  return this.a + this.b;
	},
  
	mul() {
	  return this.a * this.b;
	  
	},
  
	read() {
	  this.a = +prompt('a?', 0);
	  this.b = +prompt('b?', 0);  
	}
  };
  
  calculator.read();
  console.log(calculator.a);
  console.log(calculator.b);
  console.log(calculator.sum());
  console.log(calculator.mul()); */

/* let box = document.getElementById('box');
let button = document.getElementsByTagName('button');
let circle = document.getElementsByClassName("circle");
let heart = document.querySelectorAll('.heart');
let oneHeart = document.querySelector(".heart");
let wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = "blue";
button[1].style.borderRadius = "100%";
circle[0].style.backgroundColor = "red";
circle[1].style.backgroundColor = "yellow";
circle[2].style.backgroundColor = "green";

for(let i = 0; i < heart.length; i++){
	heart[i].style.backgroundColor = "green";
}

heart.forEach(function(item, i, mass){
     item.style.backgroundColor = 'green';
});

let div = document.createElement('div'),
	text = document.createTextNode('HELLO MOTHER FUKER');

console.log(text);
 

div.classList.add('black');
//document.body.appendChild(div);
//wrapper.appendChild(div);

div.innerHTML = "<h2>Hello world</h2>"; 

document.body.insertBefore(div, circle[1]);

document.body.removeChild(circle[0]);
wrapper.removeChild(heart[1]);

document.body.replaceChild(button[1], circle[1]);	
console.log(div);
  */


// Двоеточие между нечётными числами
/* const num = prompt('Введите число', 55);

 function colonOdd (num) {
   let str = num.toString();
   let result = [str[0]];
   for(var i=1; i<str.length; i++) {
	   if((str[i-1]%2 !== 0)&&(str[i]%2 !== 0)) {
		 result.push(':', str[i]);
		}
	   else {
		 result.push(str[i]);
	   }
   }
   return result.join("");  
 }
 
 console.log(colonOdd(num)); */

/*  const num = prompt('Введите число', 55);

 function colonOdd (num) {
   let str = num.toString();
   let result = [str[0]];
   for(var i=1; i<str.length; i++) {
	   if((str[i-1]%2 !== 0)&&(str[i]%2 !== 0)) {
		 result.push(':', str[i]);
		}
	   else {
		 result.push(str[i]);
	   }
   }
   return result.join('');  
 }
console.log(colonOdd(num));
 */

 /* last commit  */
 
// const num = prompt('Введите число', 44);

// function colon (num){
// 	let str = num.toString();
// 	let result = [str[0]];

// 	for (var i = 0; i<str.lenght; i++){
		
// 	}

// }

/* const i = 10; 
const b = "10";


let value = (i ==  b) ? "равно " :"неравно";
console.log(value);
  */
 
 let i ;
 