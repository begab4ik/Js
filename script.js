var a = +prompt ('Введети свой возраст ')
if (a>=0 && a<=18){
    alert('Вам еще нужно учиться')
}else if (a>18 && a<=50) {
    alert('Вам нужно работать ')
}else if (a>50 && a<=59){
    alert('Вам нужно в пенсию')
}else if (a>59 && a<=150){
    alert('Вы пенсионер')
}else {
    alert( 'Vi zdoxli')
}

var num = +prompt('Введите время ')
switch (num) {
    case 0:
        alert(' 12 часов ночи')
        break;
    case 1:
        alert('1 час ночи')
        break;
    case 2:
        alert('2 час ночи')
        break;
    case 3:
        alert('3 час ночи')
        break;
    case 4:
        alert('4 час ночи')
        break;
    case 5:
        alert('5 час ночи')
        break;
    case 6:
        alert('6 час ночи')
        break;
    case 7:
        alert('7 часов утра')
        break;
   
    case 8:
        alert('8 часов утра')
        break;
   
    case 9:
        alert('9 часов утра')
        break;
   
    case 10:
        alert('10 часов утра')
        break;
   
    case 11:
        alert('11 часов утра')
        break;
   
    case 12:
        alert('12 часов дня')
        break;
   
    case 13:
        alert(' час дня')
        break;
   
    case 14:
        alert(' 2 часа дня')
        break;
   
    case 15:
        alert(' 3 часа дня')
        break;
   
    case 16:
        alert(' 4 часа дня')
        break;
   
    case 17:
        alert(' 5 часов дня')
        break;
   
    case 18:
        alert(' 6 часов дня')
        break;
    case 19:
        alert(' 7 часов вечера')
        break;
    case 20:
        alert(' 8 часов вечера')
        break;
    case 21:
        alert(' 9 часов вечера')
        break;
    case 22:
        alert(' 10 часов вечера')
        break;
    case 23:
        alert(' 11 часов вечера')
        break;
    case 24:
        alert(' 12 часов ночи')
        break;
   

    default:
        alert('takogo chasa ne suwestvuet')
        break;
}




var a = prompt('Введите три числа')
var b = prompt('Введите три числа')
var c = prompt('Введите три числа')
if(a>b && b>c){
    alert(b)
}else if (b>a && a>c){
    alert(a)
}else if (a>c && c>b){
    alert(c)
}