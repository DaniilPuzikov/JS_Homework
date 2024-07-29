// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

// 1
console.log('Task1')
for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log(`${i} - это ноль`)
    } else if (i % 2 == 0) {
        console.log(`${i} - чётное число`)
    } else {
        console.log(`${i} - нечётное число`)
    }
}

// 2

let arr = [1, 2, 3, 4, 5, 6, 7]
arr.splice(3, 2)
console.log(`Task2: ${arr}`)

// 3
function sumArr(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

function isThree(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 3) {
            return 'В массиве содержится число 3'
        }
    }
    return 'В массиве не содержится число 3'
}

arr = new Array()
for (let i = 0; i < 5; i++) {
    arr.push(Math.floor(Math.random() * 10))
}
console.log('Task3:')
console.log(`Массив: ${arr}`)
console.log(`Сумма элементов массива: ${sumArr(arr)}`)
console.log(`Минимальный элемент массива: ${Math.min.apply(null, arr)}`)
console.log(isThree(arr))

// 4
array = ['x', 'xx', 'xxx', 'xxxx', 'xxxxx']
console.log('Task4')
array.forEach(element => {
    console.log(element)
});