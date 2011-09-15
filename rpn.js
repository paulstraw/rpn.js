String.prototype.rpn = function() {
	var rpn = this.split(' '),
		operators = '+-/*',
		i,
		o,
		r,
		stack = [];

	for (i = 0; i < rpn.length; i++) {
		o = parseFloat(rpn[i], 10) || rpn[i];

		var stackLength = stack.length;

		if (typeof o == 'string' && operators.indexOf(o) > -1 && stackLength > 1) {
			r = eval('stack[stackLength-2]' + o + 'stack[stackLength-1]');

			stack.splice(stackLength - 2, 2);
			stack.push(r);
		} else {
			stack.push(o);
		}
	}

	if (stack.length == 1) {
		return stack[0];
	} else {
		console.log('ERROR, here\'s your stack:', stack);
		return false;
	}
};