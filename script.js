/*
Необходимо выполнить в отдельном JS файле, подключенному к отдельной HTML странице

1) Создать переменную num со значением 266219 (тип данных число)

2) Вывести в консоль произведение (умножение) цифр этого числа

Например: число 123, при помощи javaScript получить каждое цифру ( 1, 2, 3 ) и перемножить их.

Правильно использовать цикл или методы перебора.

3) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)

4) Вывести на экран первые 2 цифры полученного числа

5) В отдельном репозитории для усложненных уроков, добавить папку или ветку со вторым уроком в свой репозиторий на GitHub
*/

let num = 266219,
    result = document.getElementById('result'),
    strNum = String(num), // получение сроки
    temp = 1;

for (let i = 0; i < strNum.length; i++) {
    
    temp = temp * +strNum[i];
}

let numberPow = temp ** 3;
numberPow = numberPow + '';

result.textContent = numberPow.substr(0, 2);
