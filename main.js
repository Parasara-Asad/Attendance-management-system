function GenerateNumber() {
  let selectbox = document.querySelector(".selectbox");
  let list = document.querySelector(".list");
  let start = Number(document.getElementById("start").value);
  let end = Number(document.getElementById("end").value);
  let output = "";
  for (let i = start; i <= end; i++) {
    output += `
    <div class="form-check">
            <input class="form-check-input student border border-2"
            type="checkbox"
            value="${i}"
            id="roll${i}">
            <label class="form-check-label" for="roll${i}">
            ${i}
            </label>
            </div>
            `;
          }
  selectbox.innerHTML = output;
  selectbox.style.border = "2px solid black";
  list.style.border = "2px solid black";
  let getattendance = document.querySelector(".getattendance");
  getattendance.innerHTML = `
  <button type="button" class="btn btn-info mt-2 border border-2 border border-dark" onclick="getatt()">
  Get Attendance
  </button>
  `;
}
function allpresent() {
  let start = Number(document.getElementById("start").value);
  let end = Number(document.getElementById("end").value);
  
  for (let i = start; i <= end; i++) {
    document.getElementById("roll" + i).checked = true;
  }
}
function clearattendance() {
  let start = Number(document.getElementById("start").value);
  let end = Number(document.getElementById("end").value);
  
  for (let i = start; i <= end; i++) {
    document.getElementById("roll" + i).checked = false;
  }
}
function getatt() {
  let selectbox = document.querySelector(".selectbox");
  let start = Number(document.getElementById("start").value);
  let end = Number(document.getElementById("end").value);
  let Presentlist = document.querySelector(".Presentlist");
  let absentlist = document.querySelector(".absentlist");
  let abcount = document.querySelector(".abcount");
  let precount = document.querySelector(".precount");
  let output1 = "";
  let countpresent = 0;
  for (let i = start; i <= end; i++) {
    if (document.getElementById("roll" + i).checked) {
      output1 += i + " ,";
      countpresent++;
    }
  }
  Presentlist.innerHTML = `
            <div class="form-floating">
            <label>Present Students</label>
            <br>
            <br>
            <textarea class="form-control"
            id="floatingTextarea2"
            readonly
            disabled
            rows="30"
            style="height: 200px" >${output1}</textarea>
            </div>
            <p class="h3 mt-5" >Total present student: ${countpresent} </p>
      `;

  let output2 = "";
  let countabsent = 0;
  for (let i = start; i <= end; i++) {
    if (!document.getElementById("roll" + i).checked) {
      output2 += i + " ,";
      countabsent++;
    }
  }
  absentlist.innerHTML = `
          <div class="form-floating">
            <label>Absent Students</label>
            <br>
            <br>
            <textarea class="form-control "
            id="floatingTextarea2"
            readonly
            disabled
            rows="30"
            style="height: 200px" >${output2}</textarea>
            </div>
            <p class="h3 mt-2" >Total Absent student: ${countabsent} </p>
  `;

  precount.innerHTML = ` <button type="button" class="btn btn-success mt-2 border border-2 border border-dark">Total present student:${countpresent}</button>`;
  abcount.innerHTML = ` <button type="button" class="btn btn-danger mt-2 border border-2 border border-dark">Total Absent student:${countpresent}</button>`;
}
