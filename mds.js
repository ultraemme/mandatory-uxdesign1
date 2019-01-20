window.mds = {
  textField: function (element) {
    let label = document.querySelector(".mds-text-field__label");
    let indicator = document.querySelector(".mds-text-field__indicator");
    element.addEventListener("focus", function (e) {
      indicator.style.transform = "scaleX(1)";
      label.style.color = "#6200ee";
      label.style.lineHeight = "32px";
      label.style.fontSize = "12px";
      label.style.opacity = "1";
    })
    element.addEventListener("blur", function (e) {
      if (!e.target.value) {
        indicator.style.transform = "scaleX(0)";
        label.style.color = null;
        label.style.lineHeight = "56px";
        label.style.fontSize = null;
        label.style.opacity = "0.6";
      }
    })
  },
  switch: function (element) {
    element.addEventListener("click", function (e) {
      element.style.color = "blue";
      console.log(element);
    })
  },
  checkbox: function (element) {
    element.addEventListener("click", function (e) {
      console.log(element);
    })
  },
  radioButton: function (element) {
    element.addEventListener("click", function (e) {
      console.log(element);
    })
  }
}