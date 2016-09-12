$(document).ready(function() {
	var names = ['Oma', 'Opa', 'Johan', 'Berend', 'Sasja', 'Douglas', 'Trudie', 'Aviva', 'Han', 'Ben', 'Lily', 'Tim', 'Karina'];

	for (var i = 0; i < names.length; i++) {
		if (names[i] == 'Karina') {
			var name = names[i] + ' bijna Kruiger';
		} else if(name[i] == 'Douglas') {
         var name = name[i] + ' Vrijberghe de Coningh';
        } else {
			var name = names[i] + ' Kruiger';
		}

		var imgFile = './img/' + names[i] + '.jpg';
		console.log(imgFile);

		var personDiv = $('<div class="person"><h3>' + name + '</h3></div>').appendTo("body");
		var img = $('<img src="' + imgFile +">').appendTo(personDiv);

		img.mouseenter(function() {
			// -3, because there are three elements before the (.person) divs start.
			var name = names[img.parent().index() - 3];
			var src = './img/' + name + '_alt.jpg';
			$(this).attr("src", src);

		});
		img.mouseleave(function() {
			// -3, because there are three elements before the (.person) divs start.
			var src = './img/' + names[img.parent().index() - 3] + '.jpg';
			$(this).attr("src", src);
		});
	}
});