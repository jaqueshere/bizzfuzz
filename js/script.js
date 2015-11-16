$(document).ready (function() {

	function FizzBuzz(top) {
		
		for (i = 1; i <= top; i++) {
			/* copying the nice check function in Thinkful lesson */
			function check(n) {
				msg = '';
				if (n % 3 == 0) {
					msg += "Fizz";
				}
				if (n % 5 == 0) {
					msg += "Buzz";
				}
				return msg || n;
			}

			$(".numlist").append("<p>" + check(i) + "</p>");
		}
	}

	function getNum() {
		var rawmax = prompt("Enter a number: ");
		/* 
		 * The first condition ensures rawmax is not a decimal number.
		 * Since NaN !== NaN, second condition ensures that rawmax is a number 
		 */
		if (((rawmax * 100) % 100 > 0) || (parseInt(rawmax) !== parseInt(rawmax))) {
			rawmax = prompt("Enter a WHOLE NUMBER: ");
		}
		Max = parseInt(rawmax, 10);
	}
	
	getNum();
	FizzBuzz(Max);

});

