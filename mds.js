let test;

window.mds = {
  textField: function (elements) {
    for (let element of elements) {
      let label = element.parentNode.children[0];
      let indicator = element.parentNode.children[2];
      element.addEventListener("focus", function (e) {
        console.log(element);
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
      element.addEventListener("click", function (e) {
        console.log(element);
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