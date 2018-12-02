function newValidate() {
	function createHarness(param, error_msg) {
		$("#modal").html(error_msg);
		$("#"+param+"").addClass('red_border');
	}

	function deleteHarness(param) {
		$("#"+param+"").removeClass('red_border');
	}

	if($("#name").val().search(/^[a-z]+$/) == 0) {
		deleteHarness("name");
		//тут отправка сообщения
	} else {
		createHarness("name", "Имя заполнено неправильно");
	}

	if($("#phone").val().search(/\+7\([0-9]{3}\)[0-9]{3}\-[0-9]{4}/) == 0 && $("#phone").val().length == 15) {
		deleteHarness("phone");
		//тут отправка сообщения
	} else {
		createHarness("phone", "Телефон указан неверно");
	}

	if($("#email").val().search(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}$/) == 0) {
		deleteHarness("email");
		//тут отправка сообщения
	} else {
		createHarness("email", "Почта указана неверно");
	}

	if($("#text").val().search(/^[a-z]+$/) == 0) {
		deleteHarness("text");
		//тут отправка сообщения
	} else {
		createHarness("text", "Поле незаполнено!");
	}

	$("#modal").dialog({modal:true });
}