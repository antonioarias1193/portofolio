window.addEventListener("scroll", function () {
	var gambar = document.querySelector(".gambar");
	var container_fluid = document.querySelector(".container-fluid");

	if (window.scrollY < 5) {
		container_fluid.classList.add("m-5");
	} else {
		container_fluid.classList.remove("m-5");
	}

	if (window.scrollY < 5) {
		gambar.classList.add("sizingonscroll");
	} else {
		gambar.classList.remove("sizingonscroll");
	}
});
