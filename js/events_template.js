$.getJSON('json/events.json', function(json) {
	var eventTemplate =
	"\
	{{#each .}}\
		<h2 id=\"{{tag}}\">{{category}}</h2>\
		{{#each events}}\
			<div class=\"well\">\
				<h4>{{title}}</h4>\
				<p><i>\
					Wann: {{time}}<br>\
					Wo: {{place}}\
				</i></p>\
				<p>{{{text}}}</p>\
			</div>\
		{{/each}}\
	{{/each}}\
	";

	var compiledEventTemplate = Handlebars.compile(eventTemplate);
	document.getElementById('events').innerHTML = compiledEventTemplate(json);

	var sidebarTemplate =
	"\
	{{#each .}}\
		<a class=\"list-group-item\" href=\"#{{tag}}\">{{category}}</a>\
	{{/each}}\
	";

	var compiledSidebarTemplate = Handlebars.compile(sidebarTemplate);
	document.getElementById('sidebar').innerHTML = compiledSidebarTemplate(json);
});