$.getJSON('json/offers.json', function(json) {
	var offerTemplate =
	"\
	{{#each .}}\
		<h2 id=\"{{tag}}\">{{category}}</h2>\
		{{#each offers}}\
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

	var compiledOfferTemplate = Handlebars.compile(offerTemplate);
	document.getElementById('offers').innerHTML = compiledOfferTemplate(json);

	var sidebarTemplate =
	"\
	{{#each .}}\
		<a class=\"list-group-item\" href=\"#{{tag}}\">{{category}}</a>\
	{{/each}}\
	";

	var compiledSidebarTemplate = Handlebars.compile(sidebarTemplate);
	document.getElementById('sidebar').innerHTML = compiledSidebarTemplate(json);
});