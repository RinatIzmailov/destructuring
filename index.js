                            //Диструктуризация объектов

// Можно создавать новые переменные и присваивать им новые значения используя уже имеющийся объект


const up = {
    name: 'Rinat',
    city: 'Brandon',
    yeat: 1983
}

// После const ставятся фигурные скобки в которых объявляются новые переменные и присваивается значение на основе значений свойств объекта

    const {name, city} = up

// Теперь можно вывести вновь созданные переменные

    console.log(name)   // Выдаст Rinat

    console.log(city)   // Выдаст Brandon


                            //Диструктуризация массивов

const fruits = ['apple', 'banana','ogurec', 'kukuruza']

// Отличие от дистр-и объектов:

        //1. наличии квадратных скобок
        //2. Объявление новых переменных и присваивание им значение будет происходить исходя из номера 
        // элемента в массиве (подряд то есть. Как сделать выборочно я пока не понял или не дослушал еще)

const [fruitFour] = fruits

console.log(fruitFour)