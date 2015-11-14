$(document).ready (function() {

	for (i = 1; i < 101; i++) {
		if ((i % 3 == 0) && (i % 5 == 0)) {
			$(".numlist").append("<p>FizzBuzz</p>");
		}
		else if (i % 3 == 0) {
			$(".numlist").append("<p>Fizz</p>");
		}
		else if (i % 5 == 0) {
			$(".numlist").append("<p>Buzz</p>");
		}
		else {
			$(".numlist").append("<p>" + i + "</p>");
		}
	}
});

