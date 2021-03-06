// Elements

const form = document.querySelector("form");
const input = document.querySelector("input");
const sendLocation = document.querySelector(".send-location");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const message = form.elements.input.value;
	input.value = "";
	input.focus();
	return alert(message);
});

sendLocation.addEventListener("click", (e) => {
	e.preventDefault();

	if (!navigator.geolocation) {
		return alert("Geolocation is not Supported");
	}

	navigator.geolocation.getCurrentPosition((position) => {
		data = {
			latitude: position.coords.latitude,
			longitude: position.coords.longitude,
		};
		return alert(
			`Latitude : ${data.latitude}, Longitude: ${data.longitude}`
		);
	});
});
