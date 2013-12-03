var wysiwyg_temp =
'\
<div class="well" style="margin-bottom:0px">\
<div id="alerts"></div>\
<div class="btn-toolbar" data-role="editor-toolbar">\
	<div class="btn-group">\
		<a class="btn btn-default dropdown-toggle" data-toggle="dropdown" title="" data-original-title="Schriftart"><i class="glyphicon glyphicon-font"></i><b class="caret"></b></a>\
		<ul class="dropdown-menu">\
			<li><a data-edit="fontName Serif" style="font-family:\'Serif\'">Serif</a></li><li><a data-edit="fontName Sans" style="font-family:\'Sans\'">Sans</a></li><li><a data-edit="fontName Arial" style="font-family:\'Arial\'">Arial</a></li><li><a data-edit="fontName Arial Black" style="font-family:\'Arial Black\'">Arial Black</a></li><li><a data-edit="fontName Courier" style="font-family:\'Courier\'">Courier</a></li><li><a data-edit="fontName Courier New" style="font-family:\'Courier New\'">Courier New</a></li><li><a data-edit="fontName Comic Sans MS" style="font-family:\'Comic Sans MS\'">Comic Sans MS</a></li><li><a data-edit="fontName Helvetica" style="font-family:\'Helvetica\'">Helvetica</a></li><li><a data-edit="fontName Impact" style="font-family:\'Impact\'">Impact</a></li><li><a data-edit="fontName Lucida Grande" style="font-family:\'Lucida Grande\'">Lucida Grande</a></li><li><a data-edit="fontName Lucida Sans" style="font-family:\'Lucida Sans\'">Lucida Sans</a></li><li><a data-edit="fontName Tahoma" style="font-family:\'Tahoma\'">Tahoma</a></li><li><a data-edit="fontName Times" style="font-family:\'Times\'">Times</a></li><li><a data-edit="fontName Times New Roman" style="font-family:\'Times New Roman\'">Times New Roman</a></li><li><a data-edit="fontName Verdana" style="font-family:\'Verdana\'">Verdana</a></li></ul>\
		</div>\
		<div class="btn-group">\
			<a class="btn btn-default dropdown-toggle" data-toggle="dropdown" title="" data-original-title="Schriftgrad"><i class="glyphicon glyphicon-text-height"></i>&nbsp;<b class="caret"></b></a>\
			<ul class="dropdown-menu">\
				<li><a data-edit="formatBlock h1" style="font-size:2em">&Uuml;berschrift 1</a></li>\
				<li><a data-edit="formatBlock h2" style="font-size:1.5em">&Uuml;berschrift 2</a></li>\
				<li><a data-edit="formatBlock h3" style="font-size:1.17em">&Uuml;berschrift 3</a></li>\
				<li><a data-edit="formatBlock h4" style="font-size:.83em">&Uuml;berschrift 4</a></li>\
				<li><a data-edit="formatBlock h5" style="font-size:.75em">&Uuml;berschrift 5</a></li>\
			</ul>\
		</div>\
		<div class="btn-group">\
			<a class="btn btn-default dropdown-toggle" data-toggle="dropdown" title="" data-original-title="Schriftfarbe"><i class="glyphicon glyphicon-tint"></i>&nbsp;<b class="caret"></b></a>\
			<ul class="dropdown-menu">\
				<li><a style="background-color:#3399FF;color:#ffffff" data-edit="foreColor #3399FF">&Uuml;berschrift</a></li>\
				<li><a style="background-color:#428bca;color:#ffffff" data-edit="foreColor #428bca">Prim&auml;r</a></li>\
				<li><a style="background-color:#5cb85c;color:#ffffff" data-edit="foreColor #5cb85c">Erfolg</a></li>\
				<li><a style="background-color:#5bc0de;color:#ffffff" data-edit="foreColor #5bc0de">Info</a></li>\
				<li><a style="background-color:#f0ad4e;color:#ffffff" data-edit="foreColor #f0ad4e">Warnung</a></li>\
				<li><a style="background-color:#d9534f;color:#ffffff" data-edit="foreColor #d9534f">Gefahr</a></li>\
				<li><a style="background-color:#000000;color:#ffffff" data-edit="foreColor #000000">Schwarz</a></li>\
				<li><a style="background-color:#ffffff;color:#000000" data-edit="foreColor #ffffff">Wei&szlig;</a></li>\
			</ul>\
		</div>\
		<div class="btn-group">\
			<a class="btn btn-default" data-edit="bold" title="" data-original-title="Fett (Ctrl/Cmd+B)"><i class="glyphicon glyphicon-bold"></i></a>\
			<a class="btn btn-default" data-edit="italic" title="" data-original-title="Kursiv (Ctrl/Cmd+I)"><i class="glyphicon glyphicon-italic"></i></a>\
			<a class="btn btn-default" data-edit="underline" title="" data-original-title="Unterstrichen (Ctrl/Cmd+U)"><i class="glyphicon glyphicon-text-width"></i></a>\
		</div>\
		<div class="btn-group">\
			<a class="btn btn-default" data-edit="insertunorderedlist" title="" data-original-title="Aufz&auml;hlung"><i class="glyphicon glyphicon-list"></i></a>\
			<a class="btn btn-default" data-edit="insertorderedlist" title="" data-original-title="Nummerierte Liste"><i class="glyphicon glyphicon-list-alt"></i></a>\
			<a class="btn btn-default" data-edit="outdent" title="" data-original-title="Einzug verkleinern (Shift+Tab)"><i class="glyphicon glyphicon-indent-left"></i></a>\
			<a class="btn btn-default" data-edit="indent" title="" data-original-title="Einzug vergr&ouml;&szlig;ern (Tab)"><i class="glyphicon glyphicon-indent-right"></i></a>\
		</div>\
		<div class="btn-group">\
			<a class="btn btn-default" data-edit="justifyleft" title="" data-original-title="Text linksb&uuml;ndig ausrichten (Ctrl/Cmd+L)"><i class="glyphicon glyphicon-align-left"></i></a>\
			<a class="btn btn-default" data-edit="justifycenter" title="" data-original-title="Text zentrieren (Ctrl/Cmd+E)"><i class="glyphicon glyphicon-align-center"></i></a>\
			<a class="btn btn-default" data-edit="justifyright" title="" data-original-title="Text rechtsb&uuml;ndig ausrichten (Ctrl/Cmd+R)"><i class="glyphicon glyphicon-align-right"></i></a>\
			<a class="btn btn-default" data-edit="justifyfull" title="" data-original-title="Blocksatz (Ctrl/Cmd+J)"><i class="glyphicon glyphicon-align-justify"></i></a>\
		</div>\
		<div class="btn-group">\
			<a class="btn btn-default dropdown-toggle" data-toggle="dropdown" title="" data-original-title="Link"><i class="glyphicon glyphicon-link"></i></a>\
			<div class="dropdown-menu input-append">\
				<input class="span2" placeholder="URL" type="text" data-edit="createLink">\
				<button class="btn" type="button">Hinzuf&uuml;gen</button>\
			</div>\
			<a class="btn btn-default" data-edit="unlink" title="" data-original-title="Link entfernen"><i class="glyphicon glyphicon-remove"></i></a>\
		</div>\
		<div class="btn-group">\
			<a class="btn btn-default" id="pictureBtn" title="" data-original-title="Bild einf&uuml;gen (auch als drag+drop)"><i class="glyphicon glyphicon-picture"></i></a>\
			<input type="file" data-role="magic-overlay" data-target="#pictureBtn" data-edit="insertImage" style="opacity: 0; position: absolute; top: 0px; left: 0px; width: 37px; height: 30px;">\
		</div>\
		<div class="btn-group">\
			<a class="btn btn-default" data-edit="undo" title="" data-original-title="R&uuml;ckg&auml;ngig (Ctrl/Cmd+Z)"><i class="glyphicon glyphicon-backward"></i></a>\
			<a class="btn btn-default" data-edit="redo" title="" data-original-title="Wiederholen (Ctrl/Cmd+Y)"><i class="glyphicon glyphicon-forward"></i></a>\
		</div>\
		<input type="text" data-edit="inserttext" id="voiceBtn" x-webkit-speech="" style="position: absolute; top: 280px; left: 1280px;">\
	</div>\
</div>\
';

// data-target="#events"

$(wysiwyg_temp).insertBefore("#events");
$('#events').wysiwyg();