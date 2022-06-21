// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
/*function sum(a) {
    return function (b) {
        return a + b
    }
}

console.log(sum(3)(6))*/

/*let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
    return function (el) {
        return el >= a && el <= b
    }
}

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

function inArray(arr) {
    return function (el) {
        return arr.includes(el)
    }

}

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2*/

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:

/*function makeCounter() {
    let count = 1
    return function () {
        return count++
    }
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
const counter2 = makeCounter();
console.log(counter2()); // 1
console.log(counter()); // 3*/

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

/*function makeCounter(num) {
    let count = num
    return {
        increase: function() {
            count++
            return count
        },
        decrease: function() {
            count--
            return count
        },
        reset: function() {
            return count = 0
        },
        set: function(value) {
            return count = value
        },
    }
}

const counter = makeCounter(1);
console.log(counter.increase());
console.log(counter.increase());
console.log(counter.decrease());
console.log(counter.decrease());
console.log(counter.reset());
console.log(counter.set(10));*/

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// function sumTo(n) {
//     let a = 0
//     if (n === 1) {
//         return n
//     }
//     for (let i = 1; i <= n; i++) {
//         a += i
//     }
//     return a
// }
//
// console.log(sumTo(6))

function sumTo(n) {
    if (n === 1) {
        return n
    }
    return n + sumTo(n - 1)
}

console.log(sumTo(6))

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

