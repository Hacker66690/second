//1)
//создать пустой обьект двумя способами
let obj1 = {}
let obj2 = new Object()

//2)
//создать обьект про себя со свойствами возраст, имя, фамилия, семейное положение, рост, вес
let myData{
   name:"Aliaga",
   surname:"Jafarov",
   age : 12,
   familyStatus: "son",
   height: "167sm",
   weight: "47"
}
//3)
//перепишите обьект в столбик
const user = {name: 'Alex', age: 23, isMarried: true, childs: ['Marry', 'Luchy']};
const user = {
  name: 'Alex',
   age: 23, 
   isMarried: true, 
   childs: ['Marry', 'Luchy']
};

//4)
//какие типы данных могут содержаться в обьекте числовые, строчные ...
//все

//5)
//выведите в консоли name из обьекта
const user = {
   name: 'Alex', 
   age: 23, 
   isMarried: true, 
   childs: ['Marry', 'Luchy']
};
user.name

//6)
//выведите в консоли age из обьекта
const user = {
   name: 'Alex', 
   age: 23, 
   isMarried: true, 
   childs: ['Marry', 'Luchy']
};
user.age


//7)
//выведите в консоли 'Luchy' из обьекта
const user = {
   name: 'Alex', 
   age: 23, 
   isMarried: true, 
   childs: ['Marry', 'Luchy']
};
user.childs[1]

//8)
//выведите в консоли money из обьекта
const user = {
   name: 'Alex', 
   age: 23, 
   isMarried: true, 
   childs: ['Marry', 'Luchy'],
   bag: {
       money: 200,
       cart: 'Master cart'
   }
};
user.bag.money

//9)
//поменяйте значение name из обьекта на 'Sam'
const user = {
   name: 'Alex', 
   age: 23, 
   isMarried: true, 
   childs: ['Marry', 'Luchy'],
   bag: {
       money: 200,
       cart: 'Master cart'
   }
};
user.name = 'Sam'

//10)
//поменяйте значение money из обьекта на 300
const user = {
   name: 'Alex', 
   age: 23, 
   isMarried: true, 
   childs: ['Marry', 'Luchy'],
   bag: {
       money: 200,
       cart: 'Master cart'
   }
};
user.bag.money = 300;

//11)
//поменяйте имя 'Marry' в массиве на 'Lara'
const user = {
   name: 'Alex', 
   age: 23, 
   isMarried: true, 
   childs: ['Marry', 'Luchy'],
   bag: {
       money: 200,
       cart: 'Master cart'
   }
};
user.childs[0] = 'Lara'

//12)
//удалите bag из обьекта  =>  delete user....
const user = {
   name: 'Alex', 
   age: 23, 
   isMarried: true, 
   childs: ['Marry', 'Luchy'],
   bag: {
       money: 200,
       cart: 'Master cart'
   }
};
delete user.bag

//13)
//добавьте в обьект свойство work со значением 'programmer' 
const user = {
   name: 'Alex', 
   age: 23, 
   isMarried: true, 
   childs: ['Marry', 'Luchy'],
   bag: {
       money: 200,
       cart: 'Master cart'
   }
};
user.work = 'programmer'