function newValidate() {
	var nameField = document.getElementById("name").value;
	var phoneField = document.getElementById("phone").value;
	var emailField = document.getElementById("email").value;
	var textField = document.getElementById("text").value;

	function createHarness(param, error_msg) {
		var param_error_msg = document.createElement('div');
		param_error_msg.className = "error";
		param_error_msg.innerHTML = error_msg;
		document.getElementById(param + '_wrap').appendChild(param_error_msg);
		document.getElementById(param).classList.add('red_border');
	}

	function deleteHarness(param) {
		document.getElementById(param).classList.remove('red_border');
	}

	if(nameField.search(/^[a-z]+$/) == 0) {
		deleteHarness("name");
		//тут отправка сообщения
	} else {
		createHarness("name", "Имя заполнено неправильно");
	}

	if(phoneField.search(/\+7\([0-9]{3}\)[0-9]{3}\-[0-9]{4}/) == 0 && phoneField.length == 15) {
		deleteHarness("phone");
		//тут отправка сообщения
	} else {
		createHarness("phone", "Телефон указан неверно");
	}

	if(emailField.search(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}$/) == 0) {
		deleteHarness("email");
		//тут отправка сообщения
	} else {
		createHarness("email", "Почта указана неверно");
	}

	if(textField.search(/^[a-z]+$/) == 0) {
		deleteHarness("text");
		//тут отправка сообщения
	} else {
		createHarness("text", "Поле незаполнено!");
	}


}

