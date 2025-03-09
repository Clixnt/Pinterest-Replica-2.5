// Javascript Code By Clint Justine Lorenzo
// Pinterest Logo when hover
const pinterestToggle = document.getElementById("pinterestLogo");
const pinterestToggle2 = document.getElementById("pin-dark");

pinterestToggle.addEventListener("mouseover", () => {
  pinterestToggle2.style.display = "block";
});
pinterestToggle.addEventListener("mouseout", () => {
  pinterestToggle2.style.display = "none";
});

// Header, wrapper 3-No.1, Notification Icon
const notiH = document.getElementById("notificationsIcon");
const dropdown4 = document.getElementById("dropdown-contents4");

notiH.onclick = function () {
  dropdown0.style.display = "none";
  dropdown1.style.display = "none";
  dropdown2.style.display = "none";

  if (dropdown4.style.display === "none") {
    dropdown4.style.display = "block";
  } else {
    dropdown4.style.display = "none";
  }
};

// Header, wrapper 3-No.2, Message Icon
const messageH = document.getElementById("chatIcon");
const dropdown0 = document.getElementById("dropdown-contents0");
const closeMsg = document.getElementById("msg-close");

messageH.onclick = function () {
  dropdown4.style.display = "none";
  dropdown1.style.display = "none";
  dropdown2.style.display = "none";

  if (dropdown0.style.display === "none") {
    dropdown0.style.display = "block";
  } else {
    dropdown0.style.display = "none";
  }
};
closeMsg.onclick = function () {
  dropdown0.style.display = "none";
};

// Header, wrapper 3-No.3, Account Icon
const accountH = document.getElementById("accountIcon");
const dropdown1 = document.getElementById("dropdown-contents1");

accountH.onclick = function () {
  dropdown4.style.display = "none";
  dropdown0.style.display = "none";
  dropdown2.style.display = "none";

  if (dropdown1.style.display === "none") {
    dropdown1.style.display = "block";
  } else {
    dropdown1.style.display = "none";
  }
};

// Header, wrapper 3-No.4, Dropdown Icon
const arrowH = document.getElementById("w3-span-img-last");
const dropdown2 = document.getElementById("dropdown-contents2");

arrowH.onclick = function () {
  dropdown4.style.display = "none";
  dropdown0.style.display = "none";
  dropdown1.style.display = "none";

  dropArrow1.style.visibility = "hidden";
  dropArrow2.style.visibility = "hidden";
  dropArrow3.style.visibility = "hidden";

  if (dropdown2.style.display === "none") {
    dropdown2.style.display = "block";
  } else {
    dropdown2.style.display = "none";
  }
};

// All Icons in header & section, to lightmode to darkmode code
const pinterest = document.getElementById("pinterestLogo");
const notificationsIcon = document.getElementById("notificationsIcon");
const acccountIcon = document.getElementById("accountIcon");
const chatIcon = document.getElementById("chatIcon");
const arrowButton = document.getElementById("w3-span-img-last");
const shareIcon = document.getElementById("shareIcon");
const moreIcon = document.getElementById("moreIcon");

const notifications = document.getElementById("notifications");
const chat = document.getElementById("chat");
const account = document.getElementById("account");
const more = document.getElementById("more");

pinterest.onclick = function () {
  // Dark mode toggle (in :root/.dark-theme, css)
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    // Pinterest hover lightmode
    pinterestToggle2.style.backgroundColor = "white";
    pinterestToggle2.style.color = "black";
    pinterestToggle2.innerHTML = "Enable LightMode";

    // notificationsIcon hover lightmode
    notifications.style.backgroundColor = "white";
    notifications.style.color = "black";
    // chatIcon hover lightmode
    chat.style.backgroundColor = "white";
    chat.style.color = "black";
    // accountIcon hover lightmode
    account.style.backgroundColor = "white";
    account.style.color = "black";
    // more hover lightmode
    more.style.backgroundColor = "white";
    more.style.color = "black";

    // Pinterest hover lightmode
    pinterestToggle2.style.backgroundColor = "white";
    pinterestToggle2.style.color = "black";
    pinterestToggle2.innerHTML = "Enable LightMode";

    // Pinterest hover lightmode
    pinterestToggle2.style.backgroundColor = "white";
    pinterestToggle2.style.color = "black";
    pinterestToggle2.innerHTML = "Enable LightMode";

    // Pinterest hover lightmode
    pinterestToggle2.style.backgroundColor = "white";
    pinterestToggle2.style.color = "black";
    pinterestToggle2.innerHTML = "Enable LightMode";

    // Change image to darkmode style
    pinterest.src = "Icon/pindark.png";
    notificationsIcon.src = "Icon/notifications_dark.svg";
    chatIcon.src = "Icon/chat_dark.svg";
    acccountIcon.src = "Icon/account_dark.svg";
    arrowButton.src = "Icon/arrow_dark.svg";
    shareIcon.src = "Icon/share_dark.svg";
    moreIcon.src = "Icon/more_dark.svg";
  } else {
    // Pinterest hover in lightmode
    pinterestToggle2.style.backgroundColor = "black";
    pinterestToggle2.style.color = "white";
    pinterestToggle2.innerHTML = "Enable DarkMode";

    // notificationsIcon hover lightmode
    notifications.style.backgroundColor = "black";
    notifications.style.color = "white";
    // chat hover lightmode
    chat.style.backgroundColor = "black";
    chat.style.color = "white";
    // accountIcon hover lightmode
    account.style.backgroundColor = "black";
    account.style.color = "white";
    // more hover lightmode
    more.style.backgroundColor = "black";
    more.style.color = "white";

    // Change image to lightmode style
    pinterest.src = "Icon/icons8-pinterest-96.png";
    notificationsIcon.src = "Icon/notifications.svg";
    chatIcon.src = "Icon/chat.svg";
    acccountIcon.src = "Icon/account.svg";
    arrowButton.src = "Icon/arrow_drop_down.svg";
    shareIcon.src = "Icon/share.svg";
    moreIcon.src = "Icon/more_horiz.svg";
  }
};

const dropArrow1 = document.getElementById("drops1");
const dropB = document.getElementById("home-drop");

dropB.onclick = function () {
  dropArrow2.style.visibility = "hidden";
  dropArrow3.style.visibility = "hidden";

  if (dropArrow1.style.visibility === "hidden") {
    dropArrow1.style.visibility = "unset";
  } else {
    dropArrow1.style.visibility = "hidden";
  }
};

const dropArrow2 = document.getElementById("drops2");
const dropB2 = document.getElementById("home-drop2");

dropB2.onclick = function () {
  dropArrow1.style.visibility = "hidden";
  dropArrow3.style.visibility = "hidden";

  if (dropArrow2.style.visibility === "hidden") {
    dropArrow2.style.visibility = "unset";
  } else {
    dropArrow2.style.visibility = "hidden";
  }
};

const dropArrow3 = document.getElementById("drops3");
const dropB3 = document.getElementById("home-drop3");

dropB3.onclick = function () {
  dropArrow1.style.visibility = "hidden";
  dropArrow2.style.visibility = "hidden";

  if (dropArrow3.style.visibility === "hidden") {
    dropArrow3.style.visibility = "unset";
  } else {
    dropArrow3.style.visibility = "hidden";
  }
};



// {
//   "image": {
//     "src": "https://example.com/image.jpg",
//     "alt": "A beautiful scenery",
//     "width": "600",
//     "height": "400"
//   }
// }




