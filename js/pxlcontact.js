(function($) {
	"use strict";
	$("#simple-post").click(function() {
		$("#pxlcontactform").submit(function(e) {
			$("#simple-msg").html("<div id='fadingBarsG'><div id='fadingBarsG_1' class='fadingBarsG'></div><div id='fadingBarsG_2' class='fadingBarsG'></div><div id='fadingBarsG_3' class='fadingBarsG'></div><div id='fadingBarsG_4' class='fadingBarsG'></div></div>");
			var postData = $(this).serializeArray();
			var formURL = $(this).attr("action");
			$.ajax(
			{
				url : formURL,
				type: "POST",
				data : postData,
				success:function(data, textStatus, jqXHR) 
				{
					if(data!='Message Sent') {
						$("#simple-msg").html('<pre><code class="prettyprint">'+data+'</code></pre>').css("color", "#FF0000");
					}
					else {
						$("#simple-msg").html('<pre><code class="prettyprint">'+data+'</code></pre>').css("color", "#009966");
						$("#pxlcontactform")[0].reset();
						setTimeout(function(){
							document.getElementById('simple-msg').innerHTML = "";
						}, 3000);
					}
				},
				error: function(jqXHR, textStatus, errorThrown) 
				{
					$("#simple-msg").html('<pre><code class="prettyprint">AJAX Request Failed<br/> textStatus='+textStatus+', errorThrown='+errorThrown+'</code></pre>');
				}
			});
			e.preventDefault();	//STOP default action
			e.unbind();
		});
	});
})(jQuery);