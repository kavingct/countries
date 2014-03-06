$(document).ready(function() {
	$.ajax({
		url: "countries.json",
		success: function(data) {
			var countries = data.countries;
			for(var i in countries) {
				$('#countries_list').append('<li data-filtertext="'+ countries[i].name +'"><a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r">'+ countries[i].name +'</a></li>');
			}
		}
	});
});