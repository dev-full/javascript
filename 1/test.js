function codingScoreReport(scores) {
	var result = { Elite: 0, Excellent: 0, Good: 0, Fair: 0, Poor: 0 };
	result.Poor = scores.filter(item => item >= 300 && item <= 599).length;
	result.Fair = scores.filter(item => item >= 600 && item <= 699).length;
	result.Good = scores.filter(item => item >= 700 && item <= 749).length;
	result.Excellent = scores.filter(item => item >= 750 && item <= 799).length;
	result.Elite = scores.filter(item => item >= 800).length;

	var sortable = [];
	for (let score in result) {
		if (result[score] > 0)
			sortable.push([score, result[score]]);
	}

	var sorted_levels = sortable
	.sort((a, b) => {
		return b[1] - a[1];
	})
	.map((v, i) => {
		return v[0] + " - " + v[1];
	});

	return sorted_levels;
}
codingScoreReport([330, 723, 730, 825]);