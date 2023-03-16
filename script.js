const url = "https://jsonplaceholder.typicode.com/posts/1";
async function getData(callback) {
try {
const response = await fetch(url);
const data = await response.json();
callback(data.title);
} catch (error) {
console.error(error);
}
}

const outputDiv = document.getElementById("output");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
getData((title) => {
outputDiv.innerText = title;
});
});
//your JS code here. If required.
