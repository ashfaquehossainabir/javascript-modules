// ES6 Module = An external file that contains reusable code
//              that can be imported into other JavaScript files
//              Can contain variables, classes, functions ... and more
//              Introduced as part of ECMAScript 2015 update


import {PI, getCircumferenceOfCircle, getAreaOfCircle, getVolumeOfSphere} from './mathUtil.js';

console.log(PI);

const circumference = getCircumferenceOfCircle(10);
const area = getAreaOfCircle(10);
const volume = getVolumeOfSphere(10);

console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm²`);
console.log(`${volume.toFixed(2)}cm^3`);