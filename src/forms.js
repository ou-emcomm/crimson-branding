function initilizeLikerts() {
  if (document.querySelectorAll(".form_likert").length > 0) {
    document
      .querySelectorAll(".form_likert .form_response input")
      .forEach(function (el) {
        el.addEventListener("change", function (e) {
          document
            .querySelectorAll(".form_likert .selected")
            .forEach(function (sel) {
              sel.classList.remove("selected");
            });
          e.target.parentNode.classList.add("selected");
        });
      });
  }
}

function initilizeFileUploaders() {
  document.querySelectorAll(".form_plugin\\:material input").forEach((el) => {
    el.addEventListener("change", function (e) {
      const files = e.target.files;
      for (let i = 0, numFiles = files.length; i < numFiles; i++) {
        const container = document.createElement("div");
        const text = document.createTextNode(files[i].name);
        container.className = "file-listing";
        container.appendChild(text);
        el.parentNode.parentNode.appendChild(container);
      }
    });
  });
}

let i = 0;
const formReady = setInterval(function () {
  i++;
  if (
    document.querySelectorAll("form[action ^= 'https://crimson.ou.edu']")
      .length > 0 ||
    document.querySelectorAll(
      "form[action ^= 'https://oue.test.technolutions.net']"
    ).length > 0
  ) {
    console.log(`Checked ${i} time(s) before form loaded.`);
    initilizeLikerts();
    initilizeFileUploaders();
    clearInterval(formReady);
  }
}, 100);
