window.mds = {
  textField: function (elements) {
    for (let element of elements) {
      let label = element.parentNode.children[0];
      let indicator = element.parentNode.children[2];
      element.addEventListener("focus", function (e) {
        if (!label.classList.contains("mds-text-field__label--focused")) {
          element.placeholder = "Placeholder text";
          label.classList.add("mds-text-field__label--focused");
          indicator.classList.add("mds-text-field__indicator--focused");
        }
      })
      element.addEventListener("blur", function (e) {
        if (!e.target.value) {
          element.placeholder = "";
          label.classList.remove("mds-text-field__label--focused")
          indicator.classList.remove("mds-text-field__indicator--focused");
        }
      })
    }
  },
  switch: function (elements) {
    for (let element of elements) {
      let track = element.children[0];
      let thumb = element.children[1];
      element.addEventListener("click", function (e) {
        if (!element.classList.contains("mds-switch--disabled")) {
          if (e.target.classList.contains("mds-switch__thumb") || e.target.classList.contains("mds-switch__track")) {
            if (!track.classList.contains("mds-switch__track--on")) {
              track.classList.add("mds-switch__track--on");
              thumb.classList.add("mds-switch__thumb--on");
            } else {
              track.classList.remove("mds-switch__track--on");
              thumb.classList.remove("mds-switch__thumb--on");
            }
          }
        } else {
          console.log("element is disabled");
        }
      })
    }
  },
  checkbox: function (elements) {
    for (let element of elements) {
      element.addEventListener("click", function (e) {
        console.log(element);
      })
    }
  },
  radioButton: function (elements) {
    for (let element of elements) {
      element.addEventListener("click", function (e) {
        console.log(element);
      })
    }
  }
}