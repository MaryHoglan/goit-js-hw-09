const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || { email: "", message: "" };


form.elements.email.value = formData.email || "";
form.elements.message.value = formData.message || "";


form.addEventListener("input", (event) => {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});


form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

    console.table(formData);

    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    formData = { email: "", message: "" };
});

