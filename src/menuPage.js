const menuPage = () => {
  let contentDiv = document.getElementById("content");
  let lettuce = document.createElement("div");
  contentDiv.append(lettuce);

  /*Sets up the lettuce div */
  let logo = document.createElement("div");
  let logoHeader = document.createElement("h1");
  lettuce.append(logo);
  logo.append(logoHeader);
  lettuce.setAttribute("class", "lettuce");
  logo.setAttribute("class", "logo");
  logoHeader.innerHTML = "MENU";

  /*Sets the first patty div */
  let patty = document.createElement("div");
  contentDiv.append(patty);
  patty.setAttribute("class", "patty");
  let pattyContent = document.createElement("div");
  patty.append(pattyContent);
  pattyContent.setAttribute("class", "pattyContentMenu");
  let menuLeft = document.createElement("div");
  pattyContent.append(menuLeft);
  menuLeft.setAttribute("class", "menuLeft");
  let contactName = document.createElement("div");
  menuLeft.append(contactName);
  contactName.setAttribute("class", "contactName");
  let contactHeader = document.createElement("h2");
  contactName.append(contactHeader);
  contactHeader.innerHTML = "BBQ Pork Sandwich";
  let contactPosition = document.createElement("div");
  menuLeft.append(contactPosition);
  contactPosition.setAttribute("class", "contactPosition");
  contactPosition.innerHTML =
    "This is the perfect pulled pork sandwich, it has our signature sauce topped with the best coleslaw you can find!";
  let contactImg = document.createElement("img");
  pattyContent.append(contactImg);
  contactImg.src = "./images/pulledpork.jpeg";
  contactImg.setAttribute("class", "contactPicture");

  /*First Cheese set up */
  let cheese = document.createElement("div");
  cheese.setAttribute("class", "cheeseMenu");
  contentDiv.append(cheese);
  let cheeseInner = document.createElement("div");
  cheeseInner.setAttribute("class", "cheeseInnerContact");
  cheese.append(cheeseInner);
  let menuLeftTwo = document.createElement("div");
  menuLeftTwo.setAttribute("class", "menuLeft");
  cheeseInner.append(menuLeftTwo);
  let contactNameCheese = document.createElement("div");
  contactNameCheese.setAttribute("class", "contactName");
  menuLeftTwo.append(contactNameCheese);
  let cheeseHeader = document.createElement("h2");
  cheeseHeader.innerHTML = "Cowboy Burger";
  contactNameCheese.append(cheeseHeader);
  let contactPositionCheese = document.createElement("div");
  contactPositionCheese.setAttribute("class", "contactPosition");
  contactPositionCheese.innerHTML =
    "This is 1/3rd pound burger with lettuce,tomatos, special sauce, pickles, and fried onions";
  menuLeftTwo.append(contactPositionCheese);
  let cheeseImg = document.createElement("img");
  cheeseImg.src = "./images/Grilled-Cowboy-Burgers.jpg";
  cheeseImg.setAttribute("class", "contactPicture");
  cheeseInner.append(cheeseImg);

  /*Sets the second patty div */
  let pattyTwo = document.createElement("div");
  contentDiv.append(pattyTwo);
  pattyTwo.setAttribute("class", "patty");
  let pattyContentTwo = document.createElement("div");
  pattyTwo.append(pattyContentTwo);
  pattyContentTwo.setAttribute("class", "pattyContentMenu");
  let menuLeftThree = document.createElement("div");
  pattyContentTwo.append(menuLeftThree);
  menuLeftThree.setAttribute("class", "menuLeft");
  let contactNameTwo = document.createElement("div");
  menuLeftThree.append(contactNameTwo);
  contactNameTwo.setAttribute("class", "contactName");
  let contactHeaderTwo = document.createElement("h2");
  contactNameTwo.append(contactHeaderTwo);
  contactHeaderTwo.innerHTML = "1 Pound Down";
  let contactPositionTwo = document.createElement("div");
  menuLeftThree.append(contactPositionTwo);
  contactPositionTwo.setAttribute("class", "contactPosition");
  contactPositionTwo.innerHTML =
    "Our 1 pound angus beef burger. If you can tackle this nothing can stop you!";
  let contactImgTwo = document.createElement("img");
  pattyContentTwo.append(contactImgTwo);
  contactImgTwo.src = "./images/HALFPOUNDjpg.jpg";
  contactImgTwo.setAttribute("class", "contactPicture");

  /*Second Cheese set up */
  let cheeseTwo = document.createElement("div");
  cheeseTwo.setAttribute("class", "cheeseMenu");
  contentDiv.append(cheeseTwo);
  let cheeseInnerTwo = document.createElement("div");
  cheeseInnerTwo.setAttribute("class", "cheeseInnerContact");
  cheeseTwo.append(cheeseInnerTwo);
  let menuLeftFour = document.createElement("div");
  menuLeftFour.setAttribute("class", "menuLeft");
  cheeseInnerTwo.append(menuLeftFour);
  let contactNameCheeseTwo = document.createElement("div");
  contactNameCheeseTwo.setAttribute("class", "contactName");
  menuLeftFour.append(contactNameCheeseTwo);
  let cheeseHeaderTwo = document.createElement("h2");
  cheeseHeaderTwo.innerHTML = "Famous Chicken Sandwich";
  contactNameCheeseTwo.append(cheeseHeaderTwo);
  let contactPositionCheeseTwo = document.createElement("div");
  contactPositionCheeseTwo.setAttribute("class", "contactPosition");
  contactPositionCheeseTwo.innerHTML =
    "This our take on a chicken sandwich. Lightly fried and made to perfection.";
  menuLeftFour.append(contactPositionCheeseTwo);
  let cheeseImgTwo = document.createElement("img");
  cheeseImgTwo.src =
    "./images/featured-fried-chicken-sandwich-recipe-reshoot.jpg";
  cheeseImgTwo.setAttribute("class", "contactPicture");
  cheeseInnerTwo.append(cheeseImgTwo);

  /*Sets the third patty div */
  let pattythree = document.createElement("div");
  contentDiv.append(pattythree);
  pattythree.setAttribute("class", "patty");
  let pattyContentthree = document.createElement("div");
  pattythree.append(pattyContentthree);
  pattyContentthree.setAttribute("class", "pattyContentMenu");
  let menuLeftFive = document.createElement("div");
  pattyContentthree.append(menuLeftFive);
  menuLeftFive.setAttribute("class", "menuLeft");
  let contactNamethree = document.createElement("div");
  menuLeftFive.append(contactNamethree);
  contactNamethree.setAttribute("class", "contactName");
  let contactHeaderthree = document.createElement("h2");
  contactNamethree.append(contactHeaderthree);
  contactHeaderthree.innerHTML = "Chicken salad";
  let contactPositionthree = document.createElement("div");
  menuLeftFive.append(contactPositionthree);
  contactPositionthree.setAttribute("class", "contactPosition");
  contactPositionthree.innerHTML =
    "For our health concious customers, we have a salad. Ringing in with under 500 calories!";
  let contactImgthree = document.createElement("img");
  pattyContentthree.append(contactImgthree);
  contactImgthree.src =
    "./images/Blackened-Chicken-and-Avocado-Salad-recipe-1.jpg";
  contactImgthree.setAttribute("class", "contactPicture");
};

export default menuPage;
