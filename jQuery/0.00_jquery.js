$(document).ready(function(){

	// alert("Hello Dave!!")

	$("#hide").click(function(){
		$("#image").hide();		
	})
	$("#show").click(function(){
			$("#image").show();
	})
	// $("#fadeIn").click(function(){
	// 	$("#image").fadeIn(5000);
	// })
	// $("#explode").click(function(){
	// 	$("#image").hide("explode",{pieces:1000}, 5000);
	// })
	// $("#slide").click(function(){
	// 		$("#image").slideUp(5000);
	// })
	$("#pulse").click(function(){
			$("#image").toggle("scale",5000)
	})
})
