const one = document.getElementById("firstFAQ");
const two = document.getElementById("secondFAQ");
const three = document.getElementById("thirdFAQ");
const four = document.getElementById("fourthFAQ");
const five = document.getElementById("fifthFAQ");

const array = [one, two, three, four, five];

function myFunc(id) {
  for (let i = 0; i < array.length; i++) {
    if (id === array.indexOf(array[i])) {
      array[i].style.display = "flex";
    } else {
      array[i].style.display = "none";
    }
  }
}

/////////////////////////////

function lowerScroll() {
  let eleToView = document.getElementById("buyNowSection");
  eleToView.scrollIntoView();
}
function upperScroll() {
  let eleToView = document.getElementById("buyNowPlan");
  eleToView.scrollIntoView();
}
