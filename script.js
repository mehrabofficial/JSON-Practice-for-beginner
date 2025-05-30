// প্রাথমিক JSON ডেটা
let employees = [
  { name: "Rahim", age: 25, department: "Accounts" },
  { name: "Karim", age: 30, department: "HR" },
  { name: "Selina", age: 28, department: "IT" }
];

// টেবিল তৈরি ফাংশন
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

// টেবিল আপডেট ফাংশন
function updateTable() {
  document.getElementById('table-container').innerHTML = generateTable(employees);
}

// ফর্ম সাবমিট হ্যান্ডলার
document.getElementById('employee-form').addEventListener('submit', function(event) {
  event.preventDefault(); // ফর্ম সাবমিট রিফ্রেশ বন্ধ

  const name = document.getElementById('name').value.trim();
  const age = parseInt(document.getElementById('age').value);
  const department = document.getElementById('department').value.trim();

  if (name && age && department) {
    // নতুন এমপ্লয়ি JSON object তৈরি করে অ্যারে-তে পুশ
    employees.push({ name, age, department });

    // টেবিল আপডেট
    updateTable();

    // ফর্ম রিসেট
    document.getElementById('employee-form').reset();
  } else {
    alert("Please fill all fields!");
  }
});

// শুরুতেই টেবিল দেখাও
updateTable();
