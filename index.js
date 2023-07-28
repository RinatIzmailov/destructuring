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

const [fruitFour] = fruits

console.log(fruitFour)