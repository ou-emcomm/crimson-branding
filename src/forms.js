function initilizeLikerts() {
  if (document.querySelectorAll('.form_likert').length > 0) {
    document.querySelectorAll('.form_likert .form_response input').forEach((el) => {
      el.addEventListener('change', (e) => {
        document.querySelectorAll('.form_likert .selected').forEach((sel) => {
          sel.classList.remove('selected');
        });
        e.target.parentNode.classList.add('selected');
      });
    });
  }
}

function initilizeFileUploaders() {
  document.querySelectorAll('.form_plugin\\:material input').forEach((el) => {
    el.addEventListener('change', (e) => {
      const { files } = e.target;
      for (let i = 0, numFiles = files.length; i < numFiles; i += 1) {
        const container = document.createElement('div');
        const text = document.createTextNode(files[i].name);
        container.className = 'file-listing';
        container.appendChild(text);
        el.parentNode.parentNode.appendChild(container);
      }
    });
  });
}

const formReady = setInterval(() => {
  if (
    document.querySelectorAll("form[action ^= 'https://crimson.ou.edu']").length > 0
    || document.querySelectorAll("form[action ^= 'https://oue.test.technolutions.net']").length > 0
  ) {
    initilizeLikerts();
    initilizeFileUploaders();
    clearInterval(formReady);
  }
}, 100);
