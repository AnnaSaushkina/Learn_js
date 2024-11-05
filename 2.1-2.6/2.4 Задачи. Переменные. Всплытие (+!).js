// ▎Задача 1: Объявление переменной

console.log(a); // Что выведет этот код?
var a = 5; // underfined // Обращение к переменной до ее создания



// ▎Задача 2: Функции и hoisting

console.log(myFunction()); // Что выведет этот код?

function myFunction() {
    return "Hello, World!";
} // Выводит "Hello, World!" // Можно обращаться к функции до ее объявления



// ▎Задача 3: let и const

console.log(b); // Что выведет этот код?
let b = 10; //  ошибка

// Вопрос: Какое значение будет выведено в консоль? Почему результат отличается от случая с var?
// Var создает пустую переменную в глобальной области видимости



// ▎Задача 4: Область видимости

console.log(c); // Что выведет этот код? // undefined
var c = 15;

function test() {
    console.log(c); // Что выведет здесь? // undefined
    var c = 20;
}

test();

console.log(c); // Что выведет этот код? // ошибка. код прервется
let c = 15;

function test() {
    console.log(c); 
    let c = 20;
}

test();

// Вопрос: Какое значение будет выведено в каждом случае и почему?
//  Первый вывод: undefined потому что переменная var поднимается. 
// Второй вывод:  внутри функции работает аналогично переменной:  undefined потому что переменная var поднимается. 
// Третий вывод: let не инициализирует переменную после обращения к ней. выкидывает ошибку


// ▎Задача 5: Функциональные выражения

console.log(d()); // Что выведет этот код?

var d = function() {
    return "Function Expression";
}; // ошибка

// Вопрос: Почему возникает ошибка или какое значение будет выведено?
// Фнкциональное выражение к коорому обращаются до объявления выдает ошибку

// ▎Задача 6: Hoisting и IIFE

(function() {
    console.log(e);
    var e = "IIFE";
})();

// Вопрос: Какое значение будет выведено в консоль и почему?
//undefined // обращаемся к переменной до ее объявления



// ▎Задача 7: Смешение типов

console.log(f); // Что выведет этот код? //undefined // обращаемся к объявленной но непроинициализированной переменной
var f = "first";
console.log(f); // Что выведет здесь? // first // обращаемся к проинициаиализированному значению переменной
var f = "second"; // не обращаемся к переназначенному значению



// ▎Задача 8: Проблемы с hoisting

console.log(g); // Что выведет этот код? // undefined
g = "Global"; // Попытка присвоить значение // присвоено значение, к которому мы не успели обратиться
var g;



// Задача 9: Объявление переменных

// Напишите функцию declareVariables, которая объявляет переменные с использованием var, let и const. Проверьте, какие из них доступны в разных областях видимости.

function declareVariables() {
    if (true) {
        var varVariable = "I am var";
        let letVariable = "I am let";
        const constVariable = "I am const";
    }
    console.log(varVariable); // Что выведет? // "I am var"
    console.log(letVariable); // Что выведет? // остановит программу с ошибкой
    console.log(constVariable);
}
declareVariables();
// Если инициализация переменной и обращение к ней в передлах одного блока - все ок (для всех var let const)
// Если обращение к проиниц. переменной за пределами блока то ок только для var.  Обращение в let и const выдает ошибку


// ▎Задача 10: Всплытие переменных

// Создайте функцию hoistingExample, которая демонстрирует, как работает всплытие переменных. Попробуйте вывести значение переменной до ее объявления.

function hoistingExample() {
    console.log(hoistedVar); // Что выведет? // undefined
    var hoistedVar = "I am hoisted";
  
    console.log(hoistedVar); // Что выведет? // "I am hoisted"
  }
  
  // Вызовите функцию
  hoistingExample();



// ▎Задача 11: Всплытие функций// ВЕРНУТЬСЯ

// Напишите функцию hoistedFunction, которая демонстрирует всплытие функций. Попробуйте вызвать функцию до ее объявления.

hoistedFunction(); // Что выведет? // "This function is hoisted!"

function hoistedFunction() {
    console.log("This function is hoisted!");
}


// Также попробуйте вызвать анонимную функцию
try {
    hoistedAnonymousFunction(); // Что выведет?
} catch (error) {
    console.log(error.message);
}

var hoistedAnonymousFunction = function() {
    console.log("This is an anonymous function.");
};

// Вызовите функцию
hoistedAnonymousFunction(); // Что выведет?



// ▎Задача 12: Область видимости переменных

// Создайте функцию scopeExample, которая демонстрирует разницу между областью видимости переменных, объявленных с помощью var, let и const.


function scopeExample() {
    var a = 1;
    let b = 2;
    const c = 3;
  
    if (true) {
        var a = 4; // Перекрывает предыдущий var a
        let b = 5; // Создает новую область видимости для let b
        const c = 6; // Создает новую область видимости для const c
  
        console.log(a); // 4
        console.log(b); // 5
        console.log(c); // 6
    }
  
    console.log(a); // 4
    console.log(b); // 2
    console.log(c); // 3
  }
  
  // Вызовите функцию
  scopeExample();



// ▎Задача 13: Замыкания и всплытие

// Напишите функцию closureExample, которая создает замыкание. Проверьте, как всплытие влияет на доступ к переменным внутри замыкания.
function closureExample() {
    var outerVar = "I am outside!";
  
    function innerFunction() {
        console.log(outerVar); // undefined
        var innerVar = "I am inside!";
    }
  
    innerFunction();
    console.log(innerVar); // Что выведет? ошибка
  }
  
  // Вызовите функцию
  closureExample();

// ▎Задача 14: Переменные в циклах

// Создайте функцию loopVariables, которая демонстрирует поведение переменных в цикле с использованием var, let и const.

function loopVariables() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function() {
            console.log("var i:", i); // Что выведет?
        }, 100);
    }

    for (let j = 0; j < 3; j++) {
        setTimeout(function() {
            console.log("let j:", j); // Что выведет?
        }, 100);
    }
}

// Вызовите функцию
loopVariables();


// ▎Задача 15: Разница между let и var

// Напишите функцию letVsVar, которая демонстрирует разницу между let и var в контексте цикла.

function letVsVar() {
    for (var x = 0; x < 3; x++) {
        setTimeout(function() {
            console.log("var x:", x); // Что выведет?
        }, 100);
    }

    for (let y = 0; y < 3; y++) {
        setTimeout(function() {
            console.log("let y:", y); // Что выведет?
        }, 100);
    }
}

// Вызовите функцию
letVsVar();