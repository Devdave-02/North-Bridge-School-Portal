// ===========================
// COURSE REGISTRATION SCRIPT
// ===========================

// Sample course data for each department and semester
const courseData = {
  Medicine: {
    "First Semester": [
      { code: "MED101", title: "Intro to Medicial Technology", 
   level: ["100", "200", "300"]
},
      { code: "MED102", title: "Human Biology I", level: ["100", "200", "300"]
},
      { code: "MED103", title: "Medical Ethics & Professionalism ", level: ["100", "200", "300"]
 },
      { code: "MED104", title: "Human Biology II", level : 100 },
      { code: "MED105", title: "Cell Biology for Medicine ",   level:  ["100" ,"200", "300"] }
    ],

    "Second Semester": [
      { code: "MED106", title: "Introduction to Community Health" , level :["100", "200", "300"]
 },  
      { code: "MED201", title: "Anatomy of the Human Systems" , level : ["100", "200", "300"] 
 }, 
      { code: "MED202", title: "Physiology I" , level : ["100", "200", "300"]},
      { code: "MED203", title: "Medical Genetics" , level: ["100", "200", "300"]},
      { code: "MED204", title: "Physiology II" , level: ["100", "200", "300"]}
    ]
  },

  Nursing: {
    "First Semester": [
      { code: "NUR101", title: "Introduction to the Nursing Profession" , level: ["100", "200", "300"]},
      { code: "NUR102", title: "Anatomy & Physiology for Nurses I"  , level: ["100", "200", "300"] },
      { code: "NUR103", title: "Basic Nursing Skills Laboratory" ,level: ["100", "200", "300"]},
      { code: "NUR104", title:"Anatomy & Physiology for Nurses II" ,level: ["100", "200", "300"]},
      { code: "NUR105", title: "Principles of Patient Care" ,level: ["100", "200", "300"]}
    ],
    "Second Semester": [
      { code: "NUR106", title: "Nursing Pharmacology Basics " , level: ["100", "200", "300"]},
      { code: "NUR201", title: "Medical–Surgical Nursing I" , level: ["100", "200", "300"]},
      { code: "NUR202", title: "Pathophysiology",level: ["100", "200", "300"] },
      { code: "NUR203", title: "Nursing Research & Evidence‑Based Practice",level: ["100", "200", "300"] },
      { code: "NUR204", title: "Medical–Surgical Nursing II" ,level: ["100", "200", "300"]}
    ]
  },

Physiology: {
    "First Semester": [
      { code: "PHS101", title: "Introductory Physiology",level: ["100", "200", "300"] },
      { code: "PHS102", title: "Biochemistry for Physiologists I" ,level: ["100", "200", "300"]},
      { code: "PHS103", title: "Cell Physiology" ,level: ["100", "200", "300"]},
      { code: "PHS104", title:"Biochemistry for Physiologists II" ,level: ["100", "200", "300"]},
      { code: "PHS105", title: "Blood & Body Fluids",level: ["100", "200", "300"] }
    ],
    "Second Semester": [
      { code: "PHS106", title: "Neural Physiology I ",level: ["100", "200", "300"] },
      { code: "PHS201", title: "Cardiovascular Physiology" ,level: ["100", "200", "300"]},
      { code: "PHS202", title: "Respiratory Physiology",level: ["100", "200", "300"] },
      { code: "PHS203", title: "Neural Physiology II",level: ["100", "200", "300"] },
      { code: "PHS204", title: "Gastro‑intestinal Physiology",level: ["100", "200", "300"] }
    ]
  },
  
  
  Anatomy: {
    "First Semester": [
      { code: "ANA101", title: "Introductory Human Anatomy" ,level: ["100", "200", "300"]},
      { code: "ANA102", title: "Basics of Histology" ,level: ["100", "200", "300"]},
      { code: "ANA103", title: "Embryology I" ,level: ["100", "200", "300"]},
      { code: "ANA104", title:"Gross Anatomy of Limbs",level: ["100", "200", "300"] },
      { code: "ANA105", title: "Embryology II",level: ["100", "200", "300"] }
    ],
    "Second Semester": [
      { code: "ANA106", title: "Developmental Biology " ,level: ["100", "200", "300"]},
      { code: "ANA201", title: "Neuroanatomy I" ,level: ["100", "200", "300"]},
      { code: "ANA202", title: "Gross Anatomy of Thorax & Abdomen" , level: ["100", "200", "300"]},
      { code: "ANA203", title: "Microscopic Techniques" ,level: ["100", "200", "300"]},
      { code: "ANA204", title: "Neuroanatomy II" ,level: ["100", "200", "300"]}
    ]
  },
  
  
"Medical Laboratory Science": {
    "First Semester": [
      { code: "MLS101", title: "Introduction to Medical Laboratory Science",level: ["100", "200", "300"] },
      { code: "MLS102", title: "Basic Laboratory Techniques" ,level: ["100", "200", "300"]},
      { code: "MLS103", title: "Anatomy & Physiology for MLS",level: ["100", "200", "300"] },
      { code: "MLS104", title:"Clinical Chemistry I" ,level: ["100", "200", "300"]},
      { code: "MLS105", title: "Microbiology I",level: ["100", "200", "300"] }
    ],
    "Second Semester": [
      { code: "MLS106", title: "Hematology I " ,level: ["100", "200", "300"]},
      { code: "MLS201", title: "Clinical Chemistry II",level: ["100", "200", "300"] },
      { code: "MLS202", title: "Microbiology II",level: ["100", "200", "300"] },
      { code: "MLS203", title: "Hematology II",level: ["100", "200", "300"] },
      { code: "MLS204", title: "Immunology & Serology" ,level: ["100", "200", "300"]}
    ]
  },
  
  // ✳ Add more departments and semesters if needed
};


// Reference to DOM elements
const departmentSelect = document.getElementById("department");
const semesterSelect = document.getElementById("semester");
const courseCheckboxes = document.getElementById("courseCheckboxes");
const form = document.getElementById("registrationForm");
const courseTable = document.getElementById("courseTable");

// =============================================
// UPDATE COURSES LIST BASED ON DEPARTMENT/SEM
// =============================================
function updateCourses() {
  const department = departmentSelect.value;
  const semester = semesterSelect.value;

  // Clear any existing course checkboxes
  courseCheckboxes.innerHTML = "";

  // If valid department and semester selected
  if (department && semester && courseData[department] && courseData[department][semester]) {
    const courses = courseData[department][semester];

    courses.forEach((course, index) => {
      // Create a checkbox
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `course-${index}`;
      checkbox.name = "courses";
      checkbox.value = JSON.stringify(course);

      // Create a label for the checkbox
      const label = document.createElement("label");
      label.htmlFor = `course-${index}`;
      label.textContent = `${course.code} - ${course.title}`;



      // Wrap checkbox and label in a <div>
      const wrapper = document.createElement("div");
      wrapper.appendChild(checkbox);
      wrapper.appendChild(label);

      // Add to DOM
      courseCheckboxes.appendChild(wrapper);
    });
  }
}

// =================================
// ENFORCE MAXIMUM OF 3 SELECTIONS
// =================================
courseCheckboxes.addEventListener("change", () => {
  const checked = document.querySelectorAll('input[name="courses"]:checked');
  if (checked.length > 3) {
    alert("You can only select 3 courses.");
    // Uncheck the last one clicked
    checked[checked.length - 1].checked = false;
  }
});

// When department or semester changes → update course list
departmentSelect.addEventListener("change", updateCourses);
semesterSelect.addEventListener("change", updateCourses);

// ==============================
// HANDLE FORM SUBMISSION
// ==============================
form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload

  const department = departmentSelect.value;
  const semester = semesterSelect.value;
  const selectedCourses = document.querySelectorAll('input[name="courses"]:checked');

  if (selectedCourses.length !== 3) {
    alert("Please select exactly 3 courses.");
    return;
  }

  // Loop through selected courses and add them to the table
  selectedCourses.forEach(courseInput => {
    const course = JSON.parse(courseInput.value);
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${course.code}</td>
      <td>${course.title}</td>
      <td>${department}</td>
      <td>${semester}</td>
      <td>${course.code.match(/\d+/)?.[0].charAt(0)}00</td>
     
 
    `;
     courseTable.appendChild(row);
  });
  
  // Clear from 
Form.reset();

courseCheckboxes.innerHTML = "";
});








