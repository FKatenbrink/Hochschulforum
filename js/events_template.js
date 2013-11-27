var eventTemplate =
"\
{{#each eventData}}\
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
document.getElementById('events').innerHTML = compiledEventTemplate(eventTemplateData);

var sidebarTemplate =
"\
{{#each eventData}}\
	<a class=\"list-group-item\" href=\"#{{tag}}\">{{category}}</a>\
{{/each}}\
";

var compiledSidebarTemplate = Handlebars.compile(sidebarTemplate);
document.getElementById('sidebar').innerHTML = compiledSidebarTemplate(eventTemplateData);