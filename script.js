let index = 0;

const information = [
  {
    img: "brucewayne.jpg",
    fullName: "Bruce Wayne",
    job: "Software Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sunt labore et, voluptate commodi sint optio cumque. Amet ipsum obcaecati molestias unde velit asperiores dicta ea nam ullam. Enim, sequi.",
    color: "#0a9396",
    quoteColor: "#57cfd1",
  },
  {
    img: "john.jpg",
    fullName: "John Wick",
    job: "Backend Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sunt labore et, voluptate commodi sint optio cumque. Amet ipsum obcaecati molestias unde velit asperiores dicta ea nam ullam. Enim, sequi.",
    color: "#ee9b00",
    quoteColor: "#ecb755",
  },
  {
    img: "walterwhite.jpg",
    fullName: "Walter White",
    job: "Front-end Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sunt labore et, voluptate commodi sint optio cumque. Amet ipsum obcaecati molestias unde velit asperiores dicta ea nam ullam. Enim, sequi.",
    color: "#001219",
    quoteColor: "#041a22",
  },
];

const rightArrow = document.querySelector(".card-slider  .fa-angle-right");
const leftArrow = document.querySelector(".card-slider  .fa-angle-left");

let imageOfBackground = document.querySelector(".bg-img");
let image = document.querySelector("#empImg");
let quote = document.querySelector(".fa-quote-left");
let cardFullName = document.querySelector("#fullName");
let cardJob = document.querySelector("#job");
let skill = document.querySelector("#skill");
let btnShowSkill = document.querySelector("#btnShow");

const changeInformationRightArrow = () => {
  imageOfBackground.style.backgroundColor = information[index].color;
  image.setAttribute("src", `./${information[index].img}`);
  quote.style.backgroundColor = information[index].quoteColor;
  cardFullName.innerHTML = information[index].fullName;
  cardJob.innerHTML = information[index].job;
  skill.innerHTML = information[index].description;
  rightArrow.style.color = information[index].color;
  leftArrow.style.color = information[index].color;
  btnShowSkill.style.backgroundColor = information[index].color;
  if (information.length - 1 == index) {
    index = 0;
  } else {
    index++;
  }
};

const changeInformationLeftArrow = () => {
  imageOfBackground.style.backgroundColor = information[index].color;
  image.setAttribute("src", `./${information[index].img}`);
  quote.style.backgroundColor = information[index].quoteColor;
  cardFullName.innerHTML = information[index].fullName;
  cardJob.innerHTML = information[index].job;
  skill.innerHTML = information[index].description;
  rightArrow.style.color = information[index].color;
  leftArrow.style.color = information[index].color;
  btnShowSkill.style.backgroundColor = information[index].color;
  if (index === 0) {
    index == information.length - 1;
  } else {
    index--;
  }
};

rightArrow.addEventListener("click", changeInformationRightArrow);
leftArrow.addEventListener("click", changeInformationLeftArrow);

console.log(index);

document.querySelector("#icon").classList.remove("fa");
document.querySelector("#icon").classList.contains("fa");
document.querySelector("#icon").classList.add("fa");
