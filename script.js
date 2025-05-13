// 1. Change text content
document.getElementById("change-text-btn").addEventListener("click", function () {
  document.getElementById("info-text").textContent = "You clicked the button! 🎉";
});

// 2. Modify CSS style
document.getElementById("toggle-style-btn").addEventListener("click", function () {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightblue" ? "#f9f9f9" : "lightblue";
});

// 3. Add a new element
document.getElementById("add-element-btn").addEventListener("click", function () {
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "This is a new paragraph added to the DOM.";
  newParagraph.classList.add("dynamic-paragraph");
  document.getElementById("element-container").appendChild(newParagraph);
});

// 4. Remove an element
document.getElementById("remove-element-btn").addEventListener("click", function () {
  const container = document.getElementById("element-container");
  if (container.lastChild) {
    container.removeChild(container.lastChild);
  }
});
