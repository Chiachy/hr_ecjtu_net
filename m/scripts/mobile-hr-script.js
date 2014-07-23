$(document).ready(function() {
	var hr    = $("#hr"),
		edit  = $("#edit"),
		intro = $("#intro");

	var tech     = $("#tech"),
		news     = $("#news"),
		prd      = $("#prd"),
		manage   = $("#manage"),
		register = $("#register");

	var next = $("#next");

	var logo = $("#logo"),
		about = $("#about"),
		back2index = $("#back2index");


	hr.css('display', 'block');
	edit.css('display', 'none');
	intro.css('display', 'none');

	hr.find('a').click(function() {
		hr.css('display', 'none');
		intro.css('display', 'block');
		var id = $(this).attr("id");
		var elem = "." + id + ":eq(0)";
		$(elem).css('display', 'block');
	});
	function tab () {
		var p = $('#intro p');
		var className =  null;
		for (var i = 0; i < p.length; ++i) {
			if (p.eq(i).css('display') !== 'none') {
				className = p.eq(i).attr('class');
				return className;
			}
		};
	};

	var count = 0;
	next.click(function() {
		count ++;
		var className = tab();
		console.log(count);
		if (count !==0 && count%2 === 0) {
			hr.css('display', 'block');
			intro.css('display', 'none');
			intro.find('p').css('display', 'none');
			count = 0;
		} else {
			var elem = '.'+ className;
			console.log(elem)
			$(this).parent().find(elem).css('display', 'none')
				.next().css('display', 'block');
		}
	});






	logo.click(function() {
		hr.css('display', 'block');
		edit.css('display', 'none');
		intro.css('display', 'none');
	});
	about.click(function() {
		hr.css('display', 'block');
		edit.css('display', 'none');
		intro.css('display', 'none');
	});
	back2index.click(function() {
		hr.css('display', 'block');
		edit.css('display', 'none');
		intro.css('display', 'none');
	});
	register.click(function() {
		hr.css('display', 'none');
		edit.css('display', 'block');
		intro.css('display', 'none');
	});

});







