var arr = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

var	count = 0;

var cycle = function(array) {
	console.log(array[count]);
	if (count > array.length){
		count = 0;
	} else {
		count++;
	}
};

var display = function() {
	document.body.style.color = colors[count];
	cycle(colors);

};

var listALL = function(array) {
	for (var i = 0; i < array.length; i++) {
		document.getElementById('colorSpace').innerHTML += "<li>" + "</

	}
}
listAll(colors)