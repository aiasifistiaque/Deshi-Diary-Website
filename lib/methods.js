export const contributorLevel = points => {
	if (points < 20) {
		return 1;
	} else if (points > 19 && points < 50) {
		return 2;
	} else if (points > 49 && points < 100) {
		return 3;
	} else if (points > 99 && points < 200) {
		return 4;
	} else if (points > 199 && points < 300) {
		return 4;
	} else if (points > 299 && points < 400) {
		return 5;
	} else if (points > 399 && points < 500) {
		return 6;
	} else if (points > 499 && points < 600) {
		return 7;
	} else if (points > 599 && points < 700) {
		return 8;
	} else if (points > 699 && points < 800) {
		return 9;
	} else if (points > 799 && points < 1000) {
		return 10;
	} else return 'X';
};
