// Задача 1: Объявление переменных

// Напишите функцию declareVariables, которая объявляет переменные с использованием var, let и const. Проверьте, какие из них доступны в разных областях видимости.

function declareVariables() {
    if (true) {
        var varVariable = "I am var";
        let letVariable = "I am let";
        const constVariable = "I am const";
    }

    console.log(varVariable); // Что выведет?
    console.log(letVariable); // Что выведет?
    console.log(constVariable); // Что выведет?
}

// Вызовите функцию
declareVariables();


// ▎Задача 2: Всплытие переменных

// Создайте функцию hoistingExample, которая демонстрирует, как работает всплытие переменных. Попробуйте вывести значение переменной до ее объявления.

function hoistingExample() {
    console.log(hoistedVar); // Что выведет?
    var hoistedVar = "I am hoisted";

    console.log(hoistedVar); // Что выведет?
}

// Вызовите функцию
hoistingExample();


// ▎Задача 3: Всплытие функций

// Напишите функцию hoistedFunction, которая демонстрирует всплытие функций. Попробуйте вызвать функцию до ее объявления.

function hoistedFunction() {
    console.log("This function is hoisted!");
}

hoistedFunction(); // Что выведет?

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


// ▎Задача 4: Область видимости переменных

// Создайте функцию scopeExample, которая демонстрирует разницу между областью видимости переменных, объявленных с помощью var, let и const.

function scopeExample() {
    var a = 1;
    let b = 2;
    const c = 3;

    if (true) {
        var a = 4; // Перекрывает предыдущий var a
        let b = 5; // Создает новую область видимости для let b
        const c = 6; // Создает новую область видимости для const c

        console.log(a); // Что выведет?
        console.log(b); // Что выведет?
        console.log(c); // Что выведет?
    }

    console.log(a); // Что выведет?
    console.log(b); // Что выведет?
    console.log(c); // Что выведет?
}

// Вызовите функцию
scopeExample();


// ▎Задача 5: Замыкания и всплытие

// Напишите функцию closureExample, которая создает замыкание. Проверьте, как всплытие влияет на доступ к переменным внутри замыкания.

function closureExample() {
    var outerVar = "I am outside!";

    function innerFunction() {
        console.log(outerVar); // Что выведет?
        var innerVar = "I am inside!";
    }

    innerFunction();
    console.log(innerVar); // Что выведет? (доступен ли innerVar здесь?)
}

// Вызовите функцию
closureExample();


// ▎Задача 6: Переменные в циклах

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


// ▎Задача 7: Разница между let и var

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