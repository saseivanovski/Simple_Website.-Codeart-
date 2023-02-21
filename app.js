// FAQ Answers
const one = document.getElementById("firstFAQ");
const two = document.getElementById("secondFAQ");
const three = document.getElementById("thirdFAQ");
const four = document.getElementById("fourthFAQ");
const five = document.getElementById("fifthFAQ");
// FAQ Headers
const first = document.getElementById("firstHeader");
const second = document.getElementById("secondHeader");
const third = document.getElementById("thirdHeader");
const fourth = document.getElementById("fourthHeader");
const fifth = document.getElementById("fifthHeader");

const border = [first, second, third, fourth, fifth];
const array = [one, two, three, four, five];

function myFunc(id) {
  for (let i = 0; i < array.length && i < border.length; i++) {
    if (id === array.indexOf(array[i])) {
      array[i].style.display = "flex";
      border[i].style.borderRadius = "10px 10px 0px 0px";
    } else {
      array[i].style.display = "none";
      border[i].style.borderRadius = "10px 10px 10px 10px";
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
