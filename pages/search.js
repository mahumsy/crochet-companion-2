import { useContext, useEffect, useState } from 'react'
import styles from '../styles/Guides.module.css'
import AuthContext from '../stores/authContext'

export default function Guides() {
  const { user, authReady, login } = useContext(AuthContext)
  const [guides, setGuides] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (authReady) {
      fetch('/.netlify/functions/guides', user && {
        headers: {
          Authorization:  'Bearer ' + user.token.access_token
        }
      })
      .then(res => {
        if (!res.ok) {
          login()
          throw Error('You must be logged in to view this content')
        }

        return res.json()
      })
      .then(data => {
        setError(null)
        setGuides(data)
      })
      .catch(err => {
        setError(err.message)
        setGuides(null)
      })
    }

  },[user, authReady])

  return (
    <>
    
    <div
        dangerouslySetInnerHTML={{
          __html: `
            <!DOCTYPE html>

            <html lang="en">

            <head>
              <meta charset="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="https://glitch.com/favicon.ico" />
              <title>Crochet Companion</title>
              <link rel="stylesheet" href="/style.css" />
              <script src="/script.js" defer></script>
            </head>

            <body>

              <div id="one">
                <img id="yuh" src="https://cdn.glitch.global/c6b9db38-a26a-4266-956d-36e2d8c4b185/IMG_0575.jpg?v=1689899431190">
                <h1>Crochet Companion</h1>
              </div>

              <ul>
                <img id="yarn" src='https://thenounproject.com/api/private/icons/643771/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0'>


                
                <img id="yarn2" src='https://thenounproject.com/api/private/icons/643771/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0'>
              </ul>


              <style>
  
  #chosenFilters {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    flex-direction: row;
  }
  #cfmichael,
  #cfpaul {
    padding: 0.2rem 0.5rem;
    background: #eee;
    border-radius: 999px;
    font-size: 0.9rem;
  }
  #namefilter {
    display: flex;
    flex-direction: row;
  }
</style>
<body>
  <input
    type="text"
    id="searchTable"
    onkeyup="searchTable()"
    placeholder="Search..."
  />
  <div>
    <div id="chosenFilters">
      <div id="namefilter">
        <div id="cfmichael"></div>
        <div id="cfpaul"></div>
      </div>
      <!-- etc -->
    </div>
    <h3>Name Filters</h3>
    <input type="checkbox" id="filterMichael" />
    <label for="filterMichael">Michael</label><br />

    <input type="checkbox" id="filterPaul" />
    <label for="filterPaul">Paul</label><br />

    <input type="checkbox" id="filterDennis" />
    <label for="filterDennis">Dennis</label><br />

    <input type="checkbox" id="filterTim" />
    <label for="filterTim">Tim</label><br />

    <input type="checkbox" id="filterErik" />
    <label for="filterErik">Erik</label><br />

    <button onclick="applyFilters()">Apply Filters</button>
  </div>
  <table id="myTable">
    <!--   - colors
red orange yellow green blue purple black white pink brown gray
- time it takes
>1 hour
1-2 hours
<2 hours
- difficulty
beginner (learn the basics), easy ,intermediate ,advanced
- stitch types (single, double, triple, honeycomb, etc)
- type (stuffed animals,  
  granny squares, tote bags, tapestries, clothing, blankets, flowers) -->
    <tr>
      <th>Pattern</th>
      <th>Image</th>
      <th>Type</th>
      <th>Difficulty</th>
      <th>Colors</th>
      <th>Stitch Types</th>
      <th>Est. Time to Make</th>
    </tr>
    <tr id="row-michael1">
      <td><a href="#" onclick="showInfo('michael1')">Bee</a></td>
      <td><img src="https://images.squarespace-cdn.com/content/v1/5e18a0efb9904526f1bedb80/f34a749b-cdaf-4655-bd49-031000a7219a/crochet+amigurumi+bee.jpg?format=1500w"
               width="100"></td>
      <td>stuffed animals</td>
      <td>easy</td>
      <td>black, yellow, white</td>
      <td>single crochet (SC)</td>
      <td>less than an hour</td>
      <td></td>
    </tr>
    <tr>
      <td>Michael</td>
      <td>32</td>
      <td>10/1/1989</td>
    </tr>
    <tr>
      <td>Paul</td>
      <td>29</td>
      <td>10/14/1990</td>
    </tr>
    <tr>
      <td>Dennis</td>
      <td>25</td>
      <td>11/29/1993</td>
    </tr>
    <tr>
      <td>Tim</td>
      <td>27</td>
      <td>3/12/1991</td>
    </tr>
    <tr>
      <td>Erik</td>
      <td>24</td>
      <td>10/31/1995</td>
    </tr>
  </table>

  <form id="addForm" onsubmit="addRow(this); return false;">
    <input name="pattern" placeholder="Pattern..." />
    <input name="age" placeholder="Type..." />
    <input name="birthday" placeholder="Difficulty..." />
    <input name="birthday" placeholder="Colors..." />
    <input name="birthday" placeholder="Stitch Types..." />

    <button type="submit">Add Row</button>
  </form>
</body>
<script>
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
</script>

              
            </html>
          ` 
        }}
      />
      </>
  )
}