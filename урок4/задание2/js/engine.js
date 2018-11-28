function newValidate() {

	function createHarness(param, error_msg) {
		$("#" + param + "_wrap").append("<div class='error'>"+ error_msg + "</div>");
		$("#" + param).addClass("red_border");
	}

	function deleteHarness(param) {
		$("#" + param).removeClass("red_border");
	}

	var namePatt = /^[a-z]+$/;
	if(namePatt.test($("#name").val())) {
		deleteHarness("name");
		//тут отправка сообщения
	} else {
		createHarness("name", "Имя заполнено неправильно");
	}

	var phonePatt = /\+7\([0-9]{3}\)[0-9]{3}\-[0-9]{4}/;
	if(phonePatt.test($("#phone").val()) && $("#phone").length() == 15) {
		deleteHarness("phone");
		//тут отправка сообщения
	} else {
		createHarness("phone", "Телефон указан неверно");
	}

	var emailPatt = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}$/;
	if(emailPatt.test($("#email").val())) {
		deleteHarness("email");
		//тут отправка сообщения
	} else {
		createHarness("email", "Почта указана неверно");
	}

	var textPatt = /^[a-z]+$/;
	if(textPatt.test($("#text").val())) {
		deleteHarness("text");
		//тут отправка сообщения
	} else {
		createHarness("text", "Поле незаполнено!");
	}
}

$.ajax({
	type: 'GET',
	url: 'http://sordes.easy4web.ru/mail/city_list.json',
	data: { get_param: 'value' }, 
    dataType: 'json',
	success: function(data){
		$.each(data, function(index, element) {
            $('#cities').append($('<option>', {
                text: element.name
            }));
        });
	}

});