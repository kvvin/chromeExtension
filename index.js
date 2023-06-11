let myInfo = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myInfo.push(inputEl.value);
  inputEl.value = ""
  renderInfo();
});

function renderInfo() {
  let listItems = "";
  for (let i = 0; i < myInfo.length; i++) {
    let url = myInfo[i];
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "http://" + url;
    }
    listItems += `
        <li>
            <a target="_blank" href="${url}">
                ${myInfo[i]}
            </a>
        </li>`;
  }

  ulEl.innerHTML = listItems;
}
