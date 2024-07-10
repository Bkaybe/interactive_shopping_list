const createElement = (element) => {
  return document.createElement(element);
};

const addText = (element, text) => {
  return (element.innerText = text);
};

const appendChild = (child, parent) => {
  return parent.appendChild(child);
};

const select = (selector) => {
  return document.querySelector(selector);
};

const listen = (element, event, callback) => {
  return element.addEventListener(event, callback);
};

const addAttribute = (element, attribute, content) => {
  return element.addAttribute(attribute, content);
};

const shoppingList = ["Milk", "Tea"];

const ol = select("ol");

const displayItems = () => {
  ol.innerHTML = "";
  shoppingList.forEach(createAListItem);
};

listen(document, "DOMContentLoaded", displayItems);

const createAListItem = (item) => {
  const li = createElement("li");
  addText(li, item);
  appendChild(li, ol);
};

const addItem = (e) => {
  e.preventDefault();
  shoppingList.push(e.target[0].value);

  displayItems();
  form.reset();
};
const form = select("form");
listen(form, "submit", addItem);

const clearlist = () => {
  shoppingList.length = 0;
  displayItems();
};

const deleteButton = select(".delete");
listen(deleteButton, "click", clearlist);
