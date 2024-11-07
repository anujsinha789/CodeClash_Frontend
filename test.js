const n = 6;
const allowed_digits = [0, 1, 2, 3];
let i;

const check = (num) => {
	for (i = 0; i < number.length - 1; ++i) {
		return !(num[i] == num[i + 1]);
	}
	return true;
};

const getArr = (num) => {
	let arr = [];
	while (num > 0) {
		arr.push(num % 10);
		num /= 10;
	}
	return arr;
};
let f = 0;
for (i = 1; ; i += 1) {
	const multiple = getArr(n * i);
	multiple.map((element) => {
		if (!(element in allowed_digits)) {
			f = 1;
			return "-1";
            break;
		}
	});
}

if (f == 0 && check(multiple)) {
	console.log(multiple);
} else console.log("-1");
