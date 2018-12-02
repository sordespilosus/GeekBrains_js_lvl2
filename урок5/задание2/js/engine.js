function reviewList() {
	$.ajax({
		type: 'GET',
		url: 'http://sordes.easy4web.ru/mail/reviews.json',
	    dataType: 'json',
		success: function(data){
			for(var i=0;i<data.items.length;i++){
	            $('.content').append('<div class="raw_review" id="' + data.items[i].id + '">' + data.items[i].text + '<div class="regulate_list"><input type="button" value="Одобрить" onclick="approveReview()" /><input type="button" value="Удалить" onclick="deketeReview()" /></div></div>');
	        };
		}
	});
};

function approveReview() {
	$(this).parent('.regulate_list').css('display', 'none');
	$(this).parent().parent().css('border', '1px solid #0f0');
}