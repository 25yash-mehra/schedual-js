let clear = document.getElementById("clear");
let user = document.getElementById("user");
let list = document.getElementById("list");

clear.addEventListener("click", function () {
    list.innerHTML = "";
})

user.addEventListener("keydown", function (word) {
    if (word.key == "Enter")
        additem();
})

function additem() {
    var item = document.createElement("h2");
    item.innerHTML = ":- " + user.value;
    item.addEventListener("click", function () {
        item.style.textDecoration = "line-through";
    })
    list.insertAdjacentElement("beforeend", item);
    user.value = "";
}
