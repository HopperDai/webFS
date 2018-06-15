const obj = $.extend({ name: 'hello' }, { age: 10 }, { heigth: 20 });
// $.extend({ name: 'hello' });

const fn = $.fn.extend();


const target = { name: 'abc' };
const source = { age: 20, height: 169 };
$.extend(target, source);
console.log(target);
target.age = 21;
console.log(target);
console.log(source);