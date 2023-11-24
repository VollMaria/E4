// Определение класса прибора
class ElectroDevice {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isTurnedOn = false;
    }
  
    // Метод включения прибора
    turnOn() {
        if (!this.isTurnedOn) {
            console.log(`${this.name}: прибор включен.`);
            this.isTurnedOn = true;
        } else {
            console.log(`${this.name}: прибор уже работает.`);
        }
    };
  
    // Метод выключения прибора
    turnOff() {
        if (this.isTurnedOn) {
            console.log(`${this.name}: прибор выключен.`);
            this.isTurnedOn = false;
        } else {
            console.log(`${this.name}: прибор уже не работает.`);
        }
    };
}
  
// Класс Микроволновка
class Microwave extends ElectroDevice {
    constructor(name, power, capacity) {
        super(name, power);
        this.capacity = capacity;
    }
  
    // Дополнительный метод для микроволновки
    setTimer(timer) {
        console.log(`${this.name}: установлен таймер на ${timer} минут`);
    }
}
  
// Класс Мультиварка
class Multicooker extends ElectroDevice {
    constructor(name, power, programs) {
        super(name, power);
        this.programs = programs;
    }
  
    // Дополнительный метод для мультиварки
    cook(program) {
      console.log(`${this.name}: приготовление по программе "${program}"`);
    }
}
  
// Функция расчета потребляемой мощности
function totalPowerConsumption(...devices) {
    let totalPower = 0;
    for (let device of devices) {
        if (device.isTurnedOn) {
          totalPower += device.power;
        }
    }
    return totalPower;
}
  
// Создание экземпляров приборов
const microwave = new Microwave('Микроволновка', 800, 'средняя');
const multicooker = new Multicooker('Мультиварка', 1000, ['варка', 'жарка', 'пар']);
  
// Включение приборов
microwave.turnOn();
multicooker.turnOn();
  
// Выполнение дополнительных действий для каждого прибора
microwave.setTimer(5);
multicooker.cook('варка риса');
  
// Вывод общей потребляемой мощности
  console.log(`Общая потребляемая мощность: ${totalPowerConsumption(microwave, multicooker)} Вт`);
  
// Выключение приборов
microwave.turnOff();
multicooker.turnOff();
  