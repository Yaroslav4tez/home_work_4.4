let numOrStr = prompt('input number or string');
console.log(numOrStr)
let forCase;

if (numOrStr === null) {
    forCase = 'скасовування';
} else if (numOrStr.trim() === '') {
    forCase = 'Empty String';
} else if (isNaN(+numOrStr)) {
    forCase = 'number is Ba_NaN';
} else {
    forCase = 'OK!';
}


switch (forCase) {
    case 'скасовування':
        console.log('ви скасували');
        break;
    case 'Empty String':
        console.log('Empty String');
        break;
    case 'number is Ba_NaN':
        console.log(' number is Ba_NaN');
        break;             
    default:
        console.log('OK!')
        break;
}