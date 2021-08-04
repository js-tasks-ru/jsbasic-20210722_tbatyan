let calculator = {
  
    read(a, b) {
      this['first_Num'] = a;
      this['second_Num'] = b;
  },
    sum() {
      return (this['first_Num'] + this['second_Num']);
  },
     mul() {
     return (this['first_Num'] * this['second_Num']);
  },

};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
