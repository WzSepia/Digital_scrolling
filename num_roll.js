/**
 * 文字吸入组件
 * @param {数据} data = [data] 
 * @param {容器id,class} eleRoot = [eleRoot:元素唯一标识]
 */
function numRoll(data, eleRoot) {
	let ele = document.querySelector(eleRoot);
	if (!eleRoot || !ele) return false;
	if (!this.num) {
		this.num = 0;
	}
	this.step = Math.floor((Number(data.num.text) - this.num) / 5);
	clearInterval(this.time);
	this.count = 0;
	this.time = setInterval(() => {
		this.count++;
		if (this.count == 6) {
			this.count = 0;
			this.num = Number(data.num.text);
			clearInterval(this.time);
		}
		let numStrArr = (this.count == 5 ? data.num.text : this.num + this.step * (this.count)).toString()
			.split('').reverse();
		let numStrArr_new = [];
		let numHtml = '<p class="num" style="' + data.num.style + '">';
		for (let i in numStrArr) {
			if (i % 3 == 0 && i != 0 && i != numStrArr.length) {
				numStrArr_new.push(numStrArr[i] + ',');
			} else {
				numStrArr_new.push(numStrArr[i]);
			}
		}
		numHtml += numStrArr_new.reverse().join('') +
			`<font style="${data.unit.style}">${data.unit.text}</font>` +
			'</p>'
		let html = `
		<div class="num_roll">
			<p style="${data.title.style}">${data.title.text}</p>
			${numHtml}
		</div>`
		ele.innerHTML = html;
	}, 1000)
}
/**
 * 文字吸入组件,方法执行
 */
numRoll(data, '.box');
