var generator = require('generate-password');

var passwords = generator.generateMultiple(3, {
	length: 25,
	numbers: true,
    symbols: true,
});

console.log(passwords);