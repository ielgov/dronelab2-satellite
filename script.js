let selectColor = '#0471DC';
let navbarColor = '#044BDC';


/* Very Simply Expand/Collapse Question & Answer */
let coll = document.getElementsByClassName("question");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
/* -------------------------------------------- */

let beginlab = document.getElementById('beginlab');
let prelim = document.getElementById('prelim');
let step1 = document.getElementById('step1');
let step2 = document.getElementById('step2');
let step3 = document.getElementById('step3');
let step4 = document.getElementById('step4');
let summary = document.getElementById('summary');

let nb = document.getElementById('nb');
let np = document.getElementById('np');
let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');
let n3 = document.getElementById('n3');
let n4 = document.getElementById('n4');
let ns = document.getElementById('ns');

function scrollToTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

function allTransparent() {
  nb.style.backgroundColor = "transparent";
  np.style.backgroundColor = "transparent";
  n1.style.backgroundColor = "transparent";
  n2.style.backgroundColor = "transparent";
  n3.style.backgroundColor = "transparent";
  n4.style.backgroundColor = "transparent";
  ns.style.backgroundColor = "transparent";
  setTimeout(scrollToTop, 50); 
}

function allHide() {
  beginlab.style.display = "none";
  prelim.style.display = "none";
  step1.style.display = "none";
  step2.style.display = "none";
  step3.style.display = "none";
  step4.style.display = "none";
  summary.style.display = "none";
}

function moveTo(step){
 switch(step) {
   case 'begin':
    allTransparent();
    allHide();     
    beginlab.style.display = "block";
     nb.style.backgroundColor = selectColor;
     break;
   case 'prelim':
    allTransparent();
    allHide();     
     prelim.style.display = "block";
     np.style.backgroundColor = selectColor;
    break;
   case 's1':
    allTransparent();
    allHide();     
    step1.style.display = "block";
    n1.style.backgroundColor = selectColor;
    break;
   case 's2':
    allTransparent();
    allHide();     
    step2.style.display = "block";
    n2.style.backgroundColor = selectColor;
    break;
   case 's3':
    allTransparent();
    allHide();        
    step3.style.display = "block";
    n3.style.backgroundColor = selectColor;
    break;
   case 's4':
    allTransparent();
    allHide();        
    step4.style.display = "block";
    n4.style.backgroundColor = selectColor;
    break;
   case 'sum':
    allTransparent();
    allHide();        
    summary.style.display = "block";
    ns.style.backgroundColor = selectColor;
    break;
  default:
    console.log('The content requested is not currently available.')
  } 
}

/* ---- Copy to Clipboard - Route Name---- */

/*
document.getElementById('copyToClipboard-routename').addEventListener('click', function() {
  let text = document.getElementById('text-routename');
  text.select();
  document.execCommand('copy');
  let notif = document.getElementById('notif-routename');
  notif.innerText = "Copied!";
})
*/


/* ---- Copy to Clipboard - Route Name 2---- */

/*
document.getElementById('copyToClipboard-routename2').addEventListener('click', function() {
  let text = document.getElementById('text-routename2');
  text.select();
  document.execCommand('copy');
  let notif = document.getElementById('notif-routename2');
  notif.innerText = "Copied!";
})
*/

/* ---- Copy to Clipboard - YAML ---- */

/*
document.getElementById('copyToClipboard-yaml').addEventListener('click', function() {
  let text = document.getElementById('text-yaml');
  text.select();
  document.execCommand('copy');
  let notif = document.getElementById('notif-yaml');
  notif.innerText = "Copied!";
})
*/

/* ---- Copy to Clipboard - RouteLocationURL ---- */

/*
document.getElementById('copyToClipboard-RouteLocationURL').addEventListener('click', function() {
  let text = document.getElementById('text-RouteLocationURL');
  text.select();
  document.execCommand('copy');
  let notif = document.getElementById('notif-RouteLocationURL');
  notif.innerText = "Copied!";
})
*/

/* ---- Copy to Clipboard - App Connect --- */


document.getElementById('copyToClipboard-appconnect').addEventListener('click', function() {
  let text = document.getElementById('text-appconnect');
  text.select();
  document.execCommand('copy');
  let notif = document.getElementById('notif-appconnect');
  notif.innerText = "Copied!";
})



/* ---- Options Menu ---- */



function toggleOptions(){
  let menu = document.getElementById('optionsMenu');

  if (menu.style.display === "block") {
    menu.style.display = "none";
  }
  else {
    menu.style.display = "block";
  }
};


var highlights = false;

function updates() {
  let optionTitle = document.getElementById("highlightedUpdates");
  let allUpdates = document.getElementsByClassName("UPDATE");

  if (highlights) { //highlights true
    console.log("currently " + highlights + " | Turning OFF updates...");
    optionTitle.innerHTML = "[Highlight 6/30/2020 Updates]";
    //optionTitle.classList.remove("sel");
      
    len = allUpdates !== null ? allUpdates.length : 0, i = 0;
    for (i; i < len; i++) {
      allUpdates[i].classList.remove("highlighted");
    }
      highlights = false;
  }

  else {
    console.log("currently " + highlights + " | Turning ON updates...");
    optionTitle.innerHTML = "[Highlight 6/30/2020 Updates ✅]";
    //optionTitle.classList.add("sel");

    len = allUpdates !== null ? allUpdates.length : 0, i = 0;
    for (i; i < len; i++) {
      allUpdates[i].classList.add("highlighted");
    }
      highlights = true;
  }
}

function updates2() {
  let optionTitle2 = document.getElementById("highlightedUpdates2");
  let allUpdates2 = document.getElementsByClassName("UPDATE2");

  if (highlights) { //highlights true
    console.log("currently " + highlights + " | Turning OFF updates...");
    optionTitle2.innerHTML = "[Highlight 7/14/2020 Updates]";
      
    len = allUpdates2 !== null ? allUpdates2.length : 0, i = 0;
    for (i; i < len; i++) {
      allUpdates2[i].classList.remove("highlighted2");
    }
      highlights = false;
  }

  else {
    console.log("currently " + highlights + " | Turning ON updates...");
    optionTitle2.innerHTML = "[Highlight 7/14/2020 Updates ✅]";

    len = allUpdates2 !== null ? allUpdates2.length : 0, i = 0;
    for (i; i < len; i++) {
      allUpdates2[i].classList.add("highlighted2");
    }
      highlights = true;
  }
}

/* Keep at Top */

function keepTop() { 
  let menu = document.getElementById('optionsMenu');
  let keepTop = document.getElementById('keepTop');

  if (menu.style.position === "fixed") {
        menu.style.position = "relative";
    keepTop.style.color = "black";
        menu.style.top = "0px";
    keepTop.innerHTML = "[Keep at top]";
  }
  else {
    menu.style.position = "fixed";
    menu.style.top = "50px";
    keepTop.style.color = "green";
    keepTop.innerHTML = "[Keep at top ✅]";
  }

}



/* ---- Preliminary Functions ---- */

let windowExample = document.getElementById("windowExample");

let routeInput = document.getElementById("routeLocationURLVal");
let confirmText = document.getElementById("confirmTextRouteLocationURL");

let endpointInput = document.getElementById("endpointAddressVal");
let confirmTextEndpoint = document.getElementById("confirmTextEndpointAddress");

let defaultValue = "YourLabName";
let defaultRouteLocationURL = "your-route-location-URL";
let defaultAppConnect= "https://ibm.box.com/shared/static/pqp3g8dg9he4iy8jnsa3b62ajbs3vv6y.yaml";
let defaultEndpointAddress = "your-endpoint-address";

let labnames = document.getElementsByClassName("labnameHere");

let allGitLinks = document.getElementsByClassName("LABUSER_GIT_LINK");
let allRouteLocationURL = document.getElementsByClassName("routeLocationURLHere");
let allYAML = document.getElementsByClassName("yamlURLHere");
let allAppConnect = document.getElementsByClassName("appconnectURLHere");
let allEndpointAddress = document.getElementsByClassName("endpointAddressHere");

let allRouteNames = document.getElementsByClassName("routeNameHere");

setLabName();

function setLabName() {
 
  defaultValue = getQValue("v");
  console.log(defaultValue);

  for (var i = 0, len = allGitLinks.length | 0; i < len; i = (i + 1) | 0) {
    allGitLinks[i].href =
      "https://github.ibm.com/GSC-2020-lab-1/" + defaultValue + "-2020-lab";
    allGitLinks[i].textContent =
      "https://github.ibm.com/GSC-2020-lab-1/" + defaultValue + "-2020-lab";
  }

  for (var i = 0, len = labnames.length | 0; i < len; i = (i + 1) | 0) {
    labnames[i].textContent = defaultValue;
  }


  for (var i = 0, len = allRouteNames.length | 0; i < len; i = (i + 1) | 0) {
    allRouteNames[i].textContent = 'drone-controller.' + defaultValue + '-2020-lab-2.svc.cluster.local';
  }

  for (var i = 0, len = allYAML.length | 0; i < len; i = (i + 1) | 0) {
    allYAML[i].textContent = 'http://drone-lab-2-yaml-template-lab-2-admin.mycluster-dal12-b-632406-ed9112eb83c761afd4c566b0882eaa3e-0000.us-south.containers.appdomain.cloud/api-connect-template/' + defaultValue + '.yaml';
  }

  for (var i = 0, len = allAppConnect.length | 0; i < len; i = (i + 1) | 0) {
    allAppConnect[i].textContent = defaultAppConnect;
  }

  
}

function createCollapseButton(nav) {
  const collapseBtn = document.createElement("div");
  collapseBtn.classList.add("collapse-button");

  const expandedState = document.createElement("div");
  expandedState.classList.add("collapse-button__collapse");
  const expandedStateIcon = document.createElement("span");
  expandedStateIcon.classList.add("collapse-button__collapse--icon");
  expandedStateIcon.classList.add("material-icons");
  expandedStateIcon.innerText = "arrow_back";
  const expandedStateLabel = document.createElement("span");
  expandedStateLabel.classList.add("collapse-button__collapse--label");
  expandedStateLabel.innerText = "Collapse";
  expandedState.appendChild(expandedStateIcon);
  expandedState.appendChild(expandedStateLabel);
  collapseBtn.appendChild(expandedState);

  const collapsedState = document.createElement("div");
  collapsedState.classList.add("collapse-button__expand");
  const collapsedStateIcon = document.createElement("span");
  collapsedStateIcon.classList.add("collapse-button__expand--icon");
  collapsedStateIcon.classList.add("material-icons");
  collapsedStateIcon.innerText = "arrow_forward";
  const collapsedStateLabel = document.createElement("span");
  collapsedStateLabel.classList.add("collapse-button__expand--label");
  collapsedStateLabel.innerText = "Expand";
  collapsedState.appendChild(collapsedStateIcon);
  collapsedState.appendChild(collapsedStateLabel);
  collapseBtn.appendChild(collapsedState);

  nav.querySelector(".tabs__list").appendChild(collapseBtn);
}


function getQValue(q_term = "q") {
  let search = window.location.search;
  search = search.split("?")[1];
  let search_arr = search.split("&");
  let q = search_arr.reduce((acc, cur) => {
    if (acc !== undefined) {
      return acc;
    }
    const tmp = cur.split("=");
    cur = {
      key: tmp[0],
      value: tmp[1]
    }
    if (cur.key === q_term) {
      acc = cur.value
    }
    return acc;
  }, undefined);
  return q;
}

console.log(getQValue("v"));

/* New for Lab 2 */
function lab1Completed() {
  var checkBox = document.getElementById("lab1Complete");
  var text = document.getElementById("lab1Confirmation");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}


/*
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("numSlide");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" redCarousel", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " redCarousel";
}

showDivs(1);
*/


function setRouteLocationURL() {
  if (routeInput.value === "") {
    confirmText.innerHTML = "Please paste the route location URL first.";
    confirmText.style.display = "inline-block";
    return
  }

  defaultRouteLocationURL = routeInput.value;

  if (routeInput.value.startsWith('https://')) {
    defaultRouteLocationURL = routeInput.value.replace('https://', '');
    if (defaultRouteLocationURL.endsWith('/')) {
      defaultRouteLocationURL = defaultRouteLocationURL.slice(0, -1);
    }
  }

  if (defaultRouteLocationURL.endsWith('/')) {
    defaultRouteLocationURL = routeInput.value.slice(0, -1);
  }


  confirmText.innerHTML =
    '<p class="congrats">Great work! This route location URL you pasted will be referenced in later steps – for your convenience, it’ll be stored locally on this instructions site for now. </p> <br/>Optionally, you can <b>test this URL below</b> and see the exposed routes. Keep in mind that your browser may display security warning (due to the self-signed certificates used), and that you will need to navigate past any errors. <p><a href="https://' + defaultRouteLocationURL + '" target="_blank"><span class="routeLocationURLHere">' + defaultRouteLocationURL + ' </span></a> (open link in a new tab)</p><p>Here is screenshot of the results for your convenience:</p><img src="./img/routeLocationURL_screenshot.png" style="width:100%"/><br/>'
  
  confirmText.style.display = "inline-block";
  document.getElementById('afterRouteLocationURL').style.display = "block";
 
  for (var i = 0, len = allRouteLocationURL.length | 0; i < len; i = (i + 1) | 0) {
    allRouteLocationURL[i].href = defaultRouteLocationURL;
    allRouteLocationURL[i].textContent =
      defaultRouteLocationURL;
  }
}

function checkpoint1() {
  document.getElementsByClassName('checkpoint1')[0].innerHTML = "32.9426934,-96.994849";
}
 
function checkpoint2() {
  document.getElementsByClassName('checkpoint1')[1].innerHTML = "32.9426934,-96.994849";
}

function setEndpointAddress() {
  if (endpointInput.value === "") {
    confirmText.innerHTML = "Please paste the endpoint address first.";
    confirmText.style.display = "inline-block";
    return
  }

  defaultEndpointAddress = endpointInput.value;

  confirmTextEndpoint.innerHTML =
    '<p class="congrats">Great work! This endpoint address you pasted will be referenced in later steps – for your convenience, it’ll be stored locally on this instructions site for now. </p> <p><a href="' + defaultEndpointAddress + '" target="_blank"><span class="endpointAddressHere">' + defaultEndpointAddress + ' </span></a></p>'
  
  confirmText.style.display = "inline-block";
  document.getElementById('afterEndpointAddress').style.display = "block";
 
  for (var i = 0, len = allEndpointAddress.length | 0; i < len; i = (i + 1) | 0) {
    allEndpointAddress[i].href = defaultEndpointAddress;
    allEndpointAddress[i].textContent =
      defaultEndpointAddress;
  }
}
