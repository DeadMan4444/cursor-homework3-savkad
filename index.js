// Степінь
function getPower(x,y){
    let result = 1;
    for ( let i = 1; i < y; i++) {
      result = result * x;
    }
  return result;
}
// Перша літера велика
function wtf(string) {
    string = string.toLowerCase()
    string = string.charAt(0).toUpperCase() + string.slice(1)
    return string;
  }
// Оплата податку
function toCountIncome(income) {
    return income= income - 20 / 100 * income;
  }
// Ціле число в діапазоні від N
function getRandomNumber(min, max) {
    return vbr=Math.floor(Math.random() * (max - min) + min);
  }
// Повторення літери
function countLetter (word, letter) {
    word=word.toLowerCase()
    letter=letter.toLowerCase()
    return (word.split(letter).length -1 )
 }
//Обмін валют
function convertCurrency(currency){
    if(currency.includes('$')) {
      return currency.split('').splice(0,currency.length-1).join('') * 37 + 'грн';
    } else{
      return currency.split('').splice(0,currency.length-3).join('') / 37 + '$';
    }
 }
document.writeln(`Степінь ${getPower(5,6)}`);
document.writeln(`Перша літера велика ${wtf("ваСиЛь")}`);
document.writeln(`Оплата податку ${toCountIncome(1200)}`);
document.writeln(`Ціле число в діапазоні від N ${getRandomNumber(1, 7)}`);
document.writeln(`Повторення літери ${countLetter("Рефрежератор","Р" )}`);
document.writeln(`Обмін валют ${convertCurrency("120$")}`);