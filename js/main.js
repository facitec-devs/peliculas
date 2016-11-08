$('form').submit(function(event) {
	event.preventDefault();
	var search = $(this).serializeArray();
	var url = 'http://omdbapi.com/?s='+search[0].value; 

	$.get(url)
		.done(function(data) {
			$.get('template/pelicula.tpl.html')
				.done(function(template) {
					
					data.Search.forEach(function(p) {
						var tpl = $(template);
						
						tpl.find('h4').html(p.Title);
						tpl.find('p').html(p.Year);
						tpl.find('span').html(p.Type);

						$('#resultados').append(tpl);

					});

			})
		})
});