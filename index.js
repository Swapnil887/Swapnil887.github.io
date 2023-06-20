// const navResume = document.getElementById("resume-button-1");
// navResume.addEventListener("click", () => {
//   window.location =
//     "https://drive.google.com/uc?export=download&id=1-Nhtkl7bYoi5G7333vplub43AD0BS3eh";
// });


// const navResume2 = document.getElementById("resume-button-2");
// navResume2.addEventListener("click", () => {
//   window.location =
//     "https://drive.google.com/uc?export=download&id=1-Nhtkl7bYoi5G7333vplub43AD0BS3eh";
// });

let sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

document.getElementById("resume-link-1").addEventListener("click", () => {
  window.location.assign(
    "https://drive.google.com/uc?export=download&id=15D7Lgl-ov8MBWiXCR0smsUKXTUcWjWCo",
    "_blank"
  );
});

document.getElementById("resume-link-2").addEventListener("click", () => {
  window.location.assign(
    "https://drive.google.com/uc?export=download&id=15D7Lgl-ov8MBWiXCR0smsUKXTUcWjWCo",
    "_blank"
  );
});