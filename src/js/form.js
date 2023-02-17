import axios from "axios";

const token = "6243412307:AAFOvAZGAF7y-H2fQMEorroyyKw-E3fZPig"
const chatId = "-1001115667349"
const urIApi = "https://api.telegram.org/bot" + token + "/sendMessage"

document.getElementById("telega").addEventListener("submit", function (e) {
	e.preventDefault()
	let message = `<b>Заявка с сайта</b>\n`;
	message += `<b>Имя отправителя:</b> ${this.name.value}\n`
	message += `<b>Email отправителя:</b> ${this.email.value}\n`
	message += `<b>Тема отправителя:</b> ${this.subject.value}\n`
	message += `<b>Сообщение отправителя:</b> ${this.message.value}\n`
	axios.post(urIApi, {
		chat_id: chatId,
		parse_mode: "html",
		text: message
	}).then((res) => {
		this.name.value = ""
		this.email.value = ""
		this.subject.value = ""
		this.message.value = ""

	})
		.catch((err) => {

		})
		.finally(() => {

		})
})

