// JSON ডেটা (এটা আমরা সাধারণত API থেকেও পেতে পারি)
const employees = [
  { "name": "Rahim", "age": 25, "department": "Accounts" },
  { "name": "Karim", "age": 30, "department": "HR" },
  { "name": "Selina", "age": 28, "department": "IT" }
];

// HTML টেবিল তৈরির ফাংশন
function generateTable(data) {
  let html = '<table><tr><th>Name</th><th>Age</th><th>Department</th></tr>';

  data.forEach(emp => {
    html += `<tr>
               <td>${emp.name}</td>
               <td>${emp.age}</td>
               <td>${emp.department}</td>
             </tr>`;
  });

  html += '</table>';
  return html;
}

// ডেটা দেখাও ব্রাউজারে
document.getElementById('table-container').innerHTML = generateTable(employees);
