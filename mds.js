window.mds = {
  textField: function (element) {
    element.addEventListener('click', function (e) {
      element.style.color = "red";
      console.log(element);
    })
  },
  switch: function (element) {
    element.addEventListener('click', function (e) {
      element.style.color = "blue";
      console.log(element);
    })
  },
  checkbox: function (element) {
    element.addEventListener('click', function (e) {
      console.log(element);
    })
  },
  radioButton: function (element) {
    element.addEventListener('click', function (e) {
      console.log(element);
    })
  }
}