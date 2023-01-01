const contactPage = () => {
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
  let logoHeader = document.createElement("h1");

  /*This is the lettuce div and its children */
  lettuce.append(logo);
  logo.append(logoHeader);

  /* This sets the attributes to lettuce elements */
  lettuce.setAttribute("class", "lettuce");
  logo.setAttribute("class", "logo");
  logoHeader.innerHTML = "Contact Us!";

  /*This adds elements to the patty div*/
  let pattyContent = document.createElement("div");
  patty.append(pattyContent);
  let contactName = document.createElement("div");
  pattyContent.append(contactName);
  let contactHeader = document.createElement("h2");
  contactName.append(contactHeader);
  let contactPosition = document.createElement("div");
  pattyContent.append(contactPosition);
  let contactNumber = document.createElement("div");
  pattyContent.append(contactNumber);
  let contactEmail = document.createElement("div");
  pattyContent.append(contactEmail);
  let contactImg = document.createElement("img");
  pattyContent.append(contactImg);

  /*this sets attrubutes to the patty elements*/
  patty.setAttribute("class", "patty");
  pattyContent.setAttribute("class", "pattyContentContact");
  contactName.setAttribute("class", "contactName");
  contactPosition.setAttribute("class", "contactPosition");
  contactNumber.setAttribute("class", "contactPosition");
  contactEmail.setAttribute("class", "contactPosition");
  contactImg.setAttribute("class", "contactPicture");

  /*This adds the content to the patty div */
  contactHeader.innerHTML = "Ben";
  contactPosition.innerHTML = "Top Bun";
  contactNumber.innerHTML = "555-555-5551";
  contactEmail.innerHTML = "realEmail@notFake.com";
  contactImg.src = "./images/topbun.jpg";

  /* This creates the elements for the cheese div*/
  let cheeseContent = document.createElement("div");
  cheese.append(cheeseContent);
  let cheeseContactName = document.createElement("div");
  cheeseContent.append(cheeseContactName);
  let cheeseContactHeader = document.createElement("h2");
  cheeseContactName.append(cheeseContactHeader);
  let cheeseContactPosition = document.createElement("div");
  cheeseContent.append(cheeseContactPosition);
  let cheeseContactNumber = document.createElement("div");
  cheeseContent.append(cheeseContactNumber);
  let cheeseContactEmail = document.createElement("div");
  cheeseContent.append(cheeseContactEmail);
  let cheeseContactImg = document.createElement("img");
  cheeseContent.append(cheeseContactImg);

  /*This sets the attibutes of cheese Elements */
  cheese.setAttribute("class", "cheeseContact");
  cheeseContent.setAttribute("class", "cheeseInnerContact");
  cheeseContactName.setAttribute("class", "contactName");
  cheeseContactPosition.setAttribute("class", "contactPosition");
  cheeseContactNumber.setAttribute("class", "contactPosition");
  cheeseContactEmail.setAttribute("class", "contactPosition");
  cheeseContactImg.setAttribute("class", "contactPicture");

  /*This sets the inside of all elements of cheese */
  cheeseContactHeader.innerHTML = "Laura";
  cheeseContactPosition.innerHTML = "Second in Cheese";
  cheeseContactNumber.innerHTML = "555-555-5552";
  cheeseContactEmail.innerHTML = "realEmail@notFake.com";
  cheeseContactImg.src = "./images/cheese.jpg";

  /* creates second patty elements */
  let pattyTwoContent = document.createElement("div");
  let pattyTwoName = document.createElement("div");
  let pattyTwoHeader = document.createElement("h2");
  let pattyTwoPosition = document.createElement("div");
  let pattyTwoNumber = document.createElement("div");
  let pattyTwoEmail = document.createElement("div");
  let pattyTwoImg = document.createElement("img");
  /* sets attributes of patty elements */
  pattyTwo.setAttribute("class", "patty");
  pattyTwoContent.setAttribute("class", "pattyContentContact");
  pattyTwoName.setAttribute("class", "contactName");
  pattyTwoHeader.innerHTML = "Hades";
  pattyTwoPosition.setAttribute("class", "contactPosition");
  pattyTwoPosition.innerHTML = "Third in patty";
  pattyTwoNumber.setAttribute("class", "contactPosition");
  pattyTwoNumber.innerHTML = "555-555-5553";
  pattyTwoEmail.setAttribute("class", "contactPosition");
  pattyTwoEmail.innerHTML = "realEmail@notFake.com";
  pattyTwoImg.setAttribute("class", "contactPicture");
  pattyTwoImg.src = "./images/burgerpatty.jpg";
  /* sets the elements content */
  pattyTwo.append(pattyTwoContent);
  pattyTwoContent.append(pattyTwoName);
  pattyTwoName.append(pattyTwoHeader);
  pattyTwoContent.append(pattyTwoPosition);
  pattyTwoContent.append(pattyTwoNumber);
  pattyTwoContent.append(pattyTwoEmail);
  pattyTwoContent.append(pattyTwoImg);
};

export default contactPage;
