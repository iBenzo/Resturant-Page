const homePage = () => {
  let body = document.body;
  let contentDiv = document.getElementById("content");
  let lettuce = document.createElement("div");
  contentDiv.append(lettuce);
  let patty = document.createElement("div");
  contentDiv.append(patty);
  let cheese = document.createElement("div");
  contentDiv.append(cheese);
  let pattyTwo = document.createElement("div");
  contentDiv.append(pattyTwo);

  /* This is to create elements for the lettuce div*/
  let logo = document.createElement("div");
  let logoImg = document.createElement("img");

  /*This is the lettuce div and its children */
  lettuce.append(logo);
  logo.append(logoImg);

  /* This sets the attributes to lettuce elements */
  lettuce.setAttribute("class", "lettuce");
  logo.setAttribute("class", "logo");
  logoImg.setAttribute("class", "logoImg");
  logoImg.src = "./images/benburger.PNG";

  /*This adds elements to the patty div*/
  let pattyContent = document.createElement("div");
  let headerThree = document.createElement("h3");
  let para = document.createElement("p");

  /*this sets attrubutes to the patty elements*/
  patty.setAttribute("class", "patty");
  pattyContent.setAttribute("class", "pattyContent");
  headerThree.innerHTML = "A message from our Founder:";
  para.innerHTML =
    "Ben's Burger bar is the one stop shop fo all burger fans! We have the best quality ingredients and we care about what we make. Our team is full of people who have a passion for burgers and love to make a great experience!";

  /*This adds the content to the patty div */
  patty.append(pattyContent);
  pattyContent.append(headerThree);
  pattyContent.append(para);

  /* This creates the elements for the cheese div*/
  let cheeseInner = document.createElement("div");
  let hoursTitle = document.createElement("div");
  let openHours = document.createElement("div");
  let openHoursWeekend = document.createElement("div");
  let headerHours = document.createElement("h3");

  /*This adds the elements to the cheese div */
  cheese.append(cheeseInner);
  cheeseInner.append(hoursTitle);
  cheeseInner.append(openHours);
  cheeseInner.append(openHoursWeekend);
  hoursTitle.append(headerHours);

  /*This sets the attibutes of cheese Elements */
  cheese.setAttribute("class", "cheese");
  cheeseInner.setAttribute("class", "cheeseInner");
  hoursTitle.setAttribute("class", "hoursTitle");
  openHours.setAttribute("class", "openHours");
  openHoursWeekend.setAttribute("class", "openHours");
  headerHours.innerHTML = "Hours:";
  openHours.innerHTML = "Saturday and Sunday: 8am - 8pm";
  openHoursWeekend.innerHTML = "Monday thru Friday: 6am - 6pm";

  /*Creates Elements for second patty */
  let pattyTwoContainer = document.createElement("div");
  let pattyHeader = document.createElement("h3");
  let pattypara = document.createElement("p");

  /*Adds elements to second patty */
  pattyTwo.append(pattyTwoContainer);
  pattyTwoContainer.append(pattyHeader);
  pattyTwoContainer.append(pattypara);

  /* Adds attributes to patty two*/
  pattyTwo.setAttribute("class", "patty");
  pattyTwoContainer.setAttribute("class", "pattyContent");
  pattyHeader.innerHTML = "Location";
  pattypara.innerHTML = "123 Patty Street, Bun Town, United States of Patty";
};

export default homePage;
