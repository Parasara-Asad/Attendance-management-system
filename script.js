const box = document.getElementById("box");
const btn = document.getElementById("btn");
const shownumber = document.querySelector("span");
const presentcount = document.getElementById("presentcount");
const absentcount = document.getElementById("absentcount");
const presentlist = document.getElementById("presentlist");
const absentlist = document.getElementById("absentlist");
const h4 = document.getElementsByTagName("h4");
const reloadbtn = document.getElementById("reloadbtn");

let attendance = {};
let start;
let end;

let presentStudents = 0;
let absentStudents = 0;

function GenerateNumber() {
  start = Number(document.getElementById("start").value);
  end = Number(document.getElementById("end").value);
  shownumber.innerHTML = start;

  box.style.display = "block";
  btn.style.display = "block";
  shownumber.style.display = "block";
  presentcount.style.display = "block";
  absentcount.style.display = "block";
  presentlist.style.display = "block";
  absentlist.style.display = "block";
  h4[0].style.display = "block";
  h4[1].style.display = "block";
  reloadbtn.style.display = "block";
  presentStudents = 0;
  absentStudents = 0;

  attendance = {};

  presentlist.innerHTML = "";
  absentlist.innerHTML = "";

  presentcount.innerHTML = `Present Students: ${presentStudents}`;
  absentcount.innerHTML = `Absent Students: ${absentStudents}`;
}
function next() {
  if (start < end) {
    start++;
    shownumber.innerHTML = start;
  } else {
    alert("End number reached!");
  }
}

function previous() {
  const firstRoll = Number(document.getElementById("start").value);

  if (start > firstRoll) {
    start--;
    shownumber.innerHTML = start;
  } else {
    alert("Start number reached!");
  }
}

function present() {
  if (attendance[start]) {
    alert("Attendance already marked!");
    return;
  }

  attendance[start] = "Present";

  presentStudents++;

  presentcount.innerHTML = `Present Students: ${presentStudents}`;

  presentlist.innerHTML += `
    <div class="badge bg-success m-1">${start}</div>
  `;
  next();
}
function absent() {
  if (attendance[start]) {
    alert("Attendance already marked!");
    return;
  }

  attendance[start] = "Absent";

  absentStudents++;

  absentcount.innerHTML = `Absent Students: ${absentStudents}`;

  absentlist.innerHTML += `
  <div class="badge bg-danger m-1">${start}</div>
  `;
  next();
}

function reloadweb() {
  location.reload();
}
