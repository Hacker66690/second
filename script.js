//1)
//превратите строку в строку в верхнем регистре 'abc' -> 'ABC'
let text1 = 'My name is Alexander'

//console.log(text1.toUpperCase());

//2)
//превратите строку в строку в нижнем регистре 'ABC' -> 'abc'
let text2 = 'MY NAME IS ALEXANDER'

//console.log(text2.toLowerCase());

//3)
//обьедините две строки
let a = 'Hello'
let b = ', my friend'

//const c = a.concat(b);
//console.log(c)

//4)
//превратите строку в массив и сделайте так чтобы вся строка стала одним элементом внутри массива
let text3 = 'My name is Alexander'

//let myText3 = text3.split('*')
//console.log(myText3)

//5)
//превратите строку в массив и сделайте так чтобы все буквы и знаки стали отдельными элементами внутри массива
let text4 = 'My name is Alexander'

//let myText4 = text4.split('')
//console.log(myText4)

//6)
//превратите строку в массив и сделайте так чтобы все слова отделенные пробелом стали отдельными элементами внутри массива
let text5 = 'My,name,is,Alexander'

//text5.split(',')

//7)
//превратите строку в массив и сделайте так чтобы в массив попало только первое слово 'My'
let text6 = 'My name is Alexander'

//console.log(text6.split(''))

//8)
//сделайте так чтобы строка ниже выдала в консоли 'OreoOreoOreo'
let pancake = 'Oreo'

//pancake.repeat(3)

//9)
//выведите в консоли первую букву из строки
let text7 = 'My name is Alexander'

//console.log(text7[0])

//10)
//проверьте наxодится ли строка 'name' в строке ниже
let text8 = 'My name is Alexander'

//console.log(text8.includes('name'))

//11)
//проверьте находится ли строка 'name' в строке после 10 индекса
let text9 = 'My name is Alexander'

//console.log(text8.includes('name' ,10))

//12)
//определите индекс первой буквы 'a' в строке
let text10 = 'My name is Alexander'

//console.log(text10.indexOf('a'))

//13)
//определите индекс последней буквы 'a' в строке
let text11 = 'My name is Alexander'

//console.log(text11.lastIndexOf('a'))

//14)
//определите заканчивается ли строка на 'der'
let text12 = 'My name is Alexander'

//console.log('My name is Alexander'.endsWith('der'))

//15)
//определите начинается ли строка на 'na'
let text13 = 'My name is Alexander'

//console.log('My name is Alexander'.startsWith('na'))

//16)
//выведите в консоли 'is' из строки ниже с помощью slice()
let text14 = 'My name is Alexander'

//const text014 = text14.slice(8,10)
//console.log(text014)

//17)
//вырезать и вывести в консоли 'name is' из строки ниже
let text15 = 'My name is Alexander'

//const text015 = text15.slice(4,10)
//console.log(text015)

//18)
//вырезать и вывести в консоли 'name is' из строки ниже с помощью отрицательных индексов
let text16 = 'My name is Alexander'

//const text016 = text16.slice(-10,-16)
//console.log(text016)

//19)
//из строки ниже вырежте и выведите в консоли 'is' с помощью substring()
let text17 = 'My name is Alexander'

//const text017 = text17.substring(8,10)
//console.log(text017)

//20)
//вырежте и выведите в консоли 5 символов после первой буквы 'n' из строки ниже
let text18 = 'My name is Alexander'

//let text018 = text18.slice(4,5)
//console.log(text018)

//21)
//замените 'name' в строке на 'lastname'
let text19 = 'My name is Alexander'

//text19.replase("name", "lastname")

//22)
//замените все буквы 'n' в строке на 'S'
let text20 = 'My name is Alexander'

//text20.replaceAll('n' , 'S')

//23)
//используя padEnd() добавьте в конец строки str столько '*' чтобы количество символов в строке стало равно 10
let str1 = 'name'

//let str01 = str1.padEnd(6,"*")

//24)
//используя padStart() добавьте в начало строки str столько '*' чтобы количество символов в строке стало равно 10
let str2 = 'name'

//let str02 = str2.padStart(6,"*")

//25)
//удалите пробелы с начала у строки ниже
let str3 = '     name'

//let str03 = str3.trimStart()

//26)
//удалите пробелы с конца у строки ниже
let str4 = 'name     '

//let str04 = str4.trimEnd()

//27)
//удалите пробелы с начала и конца у строки ниже
let str5 = '     name     '

//let str05 = str5.trim()

//28)
//выведите в консоли длину строки
let text = 'My name is Alexander'

//console.log(text.length)

//29)
//выведите в консоли только целые числа из строки
let numStr1 = '23.5rem'

//console.log(Math.trunc(numStr1))

//30)
//выведите в консоли число с плавающей точкой (23.5) из строки
let numStr2 = '23.5rem'

//console.log(Math.round(numStr2))
