let data = [
	{ id: 1, content: "CONTENT MENU 1" },
	{ id: 2, content: "CONTENT MENU 2" },
	{ id: 3, content: "CONTENT MENU 3" },
];

const getELE = (id) => {
	return document.getElementById(id);
};

const activeMenu = () => {
	let nav = getELE("menu_nav");
	let act = nav.getElementsByClassName("menu_btn");
	for (let i = 0; i < act.length; i++) {
		act[i].addEventListener("click", function () {
			let current = document.getElementsByClassName("active");
			current[0].className = current[0].className.replace(" active", "");
			this.className += " active";
		});
	}
};
activeMenu();

const clickMenu = (e) => {
	let getID = e.target.getAttribute("data-id");
	let content = getELE("content");
	data.map((item) => {
		if (getID == item.id) {
			content.innerHTML = `<p class="content_text">${item.content}</p>`;
		}
	});
	let x = screen.width;
	if (x <= 425) {
		closeMenu();
	}
};

const closeMenu = () => {
	let menu = getELE("menu_nav");
	menu.style.display = "none";
};

const showMenu = () => {
	let menu = getELE("menu_nav");

	menu.style.display = "block";
};
