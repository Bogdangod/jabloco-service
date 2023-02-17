const menu = document.querySelector("#menu-bars")
const heder = document.querySelector("header")



export function burger() {
	menu.onclick = () => {
		menu.classList.toggle('fa-times')
		heder.classList.toggle("active")
	}
	window.onscroll = () => {
		menu.classList.remove('fa-times')
		heder.classList.remove("active")
	}
}