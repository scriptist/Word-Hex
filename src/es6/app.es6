import getAllColors from './getAllColors.es6';

const formElm = document.getElementById('form-wordhex');
const inputElm = document.getElementById('input-word');
const resultElm = document.getElementById('result');

function go(word) {
	const result = getAllColors(word);

	if (typeof result === 'string') {
		resultElm.innerHTML = `<p class="result__error">${result}</p>`;
	} else {
		const className = `result__item${result.length > 1000 ? ' result__item--small' : ''}`;

		resultElm.innerHTML = '';

		const title = document.createElement('h2');
		title.className = 'result__title';
		title.innerHTML = `Colors containing the word <span class="result__title__word">${word}</span>`;
		resultElm.appendChild(title);

		for (let i = 0; i < result.length; i++) {
			const color = result[i];
			const div = document.createElement('div');
			div.className = className;
			div.style.backgroundColor = `#${color}`;
			div.innerHTML = color;

			resultElm.appendChild(div);
		}
	}
}

formElm.addEventListener('submit', e => {
	e.preventDefault();
	go(inputElm.value);
});

go('beef');
