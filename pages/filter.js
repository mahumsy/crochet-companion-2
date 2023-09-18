
  //when you add all of them
  // Append filter divs to #namefilter instead of #chosenFilters
  // if (filterMichael) {
  //   document.getElementById("namefilter").appendChild(document.getElementById("cfmichael"));
  // }

  // if (filterPaul) {
  //   document.getElementById("namefilter").appendChild(document.getElementById("cfpaul"));
  // }
  const filterMichael = document.getElementById("filterMichael").checked;
  const filterPaul = document.getElementById("filterPaul").checked;

  // Show/hide filter divs
  if (!filterMichael) {
    document.getElementById("cfpaul").style.display = "none";
    document.getElementById("cfmichael").style.display = "none";
    document.getElementById("cfmichael").innerText = "eyah2";
  }
  function showInfo(id) {
    if (id === "michael1") {
      window.location.href = "michael1.html";
    } else if (id === "michael2") {
      window.location.href = "michael2.html";
    }
  }

  function updateChosenFilters() {
    // Get checked checkboxes
    const filterMichael = document.getElementById("filterMichael").checked;
    const filterPaul = document.getElementById("filterPaul").checked;

    // Show/hide filter divs
    if (filterMichael) {
      document.getElementById("cfmichael").style.display = "block";
      document.getElementById("cfmichael").innerText = "Michael";
    } else {
      document.getElementById("cfmichael").style.display = "none";
    }

    if (filterPaul) {
      document.getElementById("cfpaul").style.display = "block";
      document.getElementById("cfpaul").innerText = "Paul";
    } else {
      document.getElementById("cfpaul").style.display = "none";
    }

    // Update text
  }

  function applyFilters() {
    // Get checked checkboxes
    var filterMichael = document.getElementById("filterMichael").checked;
    var filterPaul = document.getElementById("filterPaul").checked;
    var filterDennis = document.getElementById("filterDennis").checked;
    var filterTim = document.getElementById("filterTim").checked;
    var filterErik = document.getElementById("filterErik").checked;

    // Filter table
    var table = document.getElementById("myTable");
    for (var i = 0, row; (row = table.rows[i]); i++) {
      // Get name from first column
      var name = row.cells[0].innerText;

      // Show/hide based on filters
      if (name === "Michael" && !filterMichael) {
        row.style.display = "none";
      } else if (name === "Paul" && !filterPaul) {
        row.style.display = "none";
      } else if (name === "Dennis" && !filterDennis) {
        row.style.display = "none";
      } else if (name === "Tim" && !filterTim) {
        row.style.display = "none";
      } else if (name === "Erik" && !filterErik) {
        row.style.display = "none";
      } else {
        row.style.display = "";
      }
    }

    updateChosenFilters();
  }

  function searchTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchTable");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      // Check name, age, and birthday columns
      tdName = tr[i].getElementsByTagName("td")[0];
      tdAge = tr[i].getElementsByTagName("td")[1];
      tdBirthday = tr[i].getElementsByTagName("td")[2];

      if (tdName || tdAge || tdBirthday) {
        txtName = tdName ? tdName.textContent || tdName.innerText : "";
        txtAge = tdAge ? tdAge.textContent || tdAge.innerText : "";
        txtBirthday = tdBirthday
          ? tdBirthday.textContent || tdBirthday.innerText
          : "";

        if (
          txtName.toUpperCase().indexOf(filter) > -1 ||
          txtAge.toUpperCase().indexOf(filter) > -1 ||
          txtBirthday.toUpperCase().indexOf(filter) > -1
        ) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  function addRow(form) {
    // Get values
    var name = form.name.value;
    var age = form.age.value;
    var birthday = form.birthday.value;

    // Create row
    var row = document.createElement("tr");

    // Create cells
    var nameCell = document.createElement("td");
    var ageCell = document.createElement("td");
    var birthdayCell = document.createElement("td");

    // Add text content
    nameCell.textContent = name;
    ageCell.textContent = age;
    birthdayCell.textContent = birthday;

    // Add cells to row
    row.appendChild(nameCell);
    row.appendChild(ageCell);
    row.appendChild(birthdayCell);

    // Add row to table
    document.getElementById("myTable").appendChild(row);

    // Clear form
    form.reset();
  }

