// fake data:: all member
const allMembers = [
  {
    memberName: "Amina Khatun",
    memberCode: 111001001,
    branchName: "Rajshahi Branch",
    samityName: "Alor Path-1",
    samityCode: 111001,
    workingArea: "Paba Upazila, Rajshahi, Bangladesh",
    fatherName: "Abdul Karim",
    motherName: "Rokeya Begum",
    spouseName: "Md. Selim Hossain",
    loan: {
      installmentAmount: 1450,
    },
  },
  {
    memberName: "Shahana Begum",
    memberCode: 111001002,
    branchName: "Rajshahi Branch",
    samityName: "Alor Path-2",
    samityCode: 111001,
    workingArea: "Paba Upazila, Rajshahi, Bangladesh",
    fatherName: "Md. Yunus Ali",
    motherName: "Rahima Khatun",
    spouseName: "Md. Nazrul Islam",
    loan: {
      installmentAmount: 1550,
    },
  },
  {
    memberName: "Rahima Akter",
    memberCode: 111001003,
    branchName: "Bogura Branch",
    samityName: "Uttoron",
    samityCode: 111001,
    workingArea: "Shajahanpur Upazila, Bogura, Bangladesh",
    fatherName: "Abdul Malek",
    motherName: "Ayesha Begum",
    spouseName: "Md. Kamal Hossain",
    loan: {
      installmentAmount: 1800,
    },
  },
  {
    memberName: "Nasima Begum",
    memberCode: 111001004,
    branchName: "Cumilla Branch",
    samityName: "Nabodoy",
    samityCode: 111001,
    workingArea: "Debidwar Upazila, Cumilla, Bangladesh",
    fatherName: "Md. Siraj Uddin",
    motherName: "Salma Begum",
    spouseName: "Md. Rafiqul Islam",
    loan: {
      installmentAmount: 18000,
    },
  },
  {
    memberName: "Parvin Akter",
    memberCode: 111001005,
    branchName: "Rangpur Branch",
    samityName: "Shapla",
    samityCode: 111001,
    workingArea: "Mithapukur Upazila, Rangpur, Bangladesh",
    fatherName: "Abdul Jabbar",
    motherName: "Momena Begum",
    spouseName: "Md. Habibur Rahman",
    loan: {
      installmentAmount: 15500,
    },
  },
  {
    memberName: "Sharmin Chowdhury",
    memberCode: 111002001,
    branchName: "Rajshahi Branch",
    samityName: "Alor Path-1",
    samityCode: 111002,
    workingArea: "Paba Upazila, Rajshahi, Bangladesh",
    fatherName: "Abdul Karim",
    motherName: "Rokeya Begum",
    spouseName: "Md. Selim Hossain",
    loan: {
      installmentAmount: 1450,
    },
  },
  {
    memberName: "Arif Mahmud",
    memberCode: 111002002,
    branchName: "Rajshahi Branch",
    samityName: "Alor Path-2",
    samityCode: 111002,
    workingArea: "Paba Upazila, Rajshahi, Bangladesh",
    fatherName: "Md. Yunus Ali",
    motherName: "Rahima Khatun",
    spouseName: "Md. Nazrul Islam",
    loan: {
      installmentAmount: 1550,
    },
  },
  {
    memberName: "Farzana Rahman",
    memberCode: 111002003,
    branchName: "Bogura Branch",
    samityName: "Uttoron",
    samityCode: 111002,
    workingArea: "Shajahanpur Upazila, Bogura, Bangladesh",
    fatherName: "Abdul Malek",
    motherName: "Ayesha Begum",
    spouseName: "Md. Kamal Hossain",
    loan: {
      installmentAmount: 1800,
    },
  },
  {
    memberName: "Imran Hossain",
    memberCode: 111002004,
    branchName: "Cumilla Branch",
    samityName: "Nabodoy",
    samityCode: 111002,
    workingArea: "Debidwar Upazila, Cumilla, Bangladesh",
    fatherName: "Md. Siraj Uddin",
    motherName: "Salma Begum",
    spouseName: "Md. Rafiqul Islam",
    loan: {
      installmentAmount: 18000,
    },
  },
  {
    memberName: "Rima Sultana",
    memberCode: 111002005,
    branchName: "Rangpur Branch",
    samityName: "Shapla",
    samityCode: 111002,
    workingArea: "Mithapukur Upazila, Rangpur, Bangladesh",
    fatherName: "Abdul Jabbar",
    motherName: "Momena Begum",
    spouseName: "Md. Habibur Rahman",
    loan: {
      installmentAmount: 15500,
    },
  },
  {
    memberName: "Tanvir Ahmed",
    memberCode: 111003001,
    branchName: "Rajshahi Branch",
    samityName: "Alor Path-1",
    samityCode: 111003,
    workingArea: "Paba Upazila, Rajshahi, Bangladesh",
    fatherName: "Abdul Karim",
    motherName: "Rokeya Begum",
    spouseName: "Md. Selim Hossain",
    loan: {
      installmentAmount: 1450,
    },
  },
  {
    memberName: "Nusrat Jahan",
    memberCode: 111003002,
    branchName: "Rajshahi Branch",
    samityName: "Alor Path-2",
    samityCode: 111003,
    workingArea: "Paba Upazila, Rajshahi, Bangladesh",
    fatherName: "Md. Yunus Ali",
    motherName: "Rahima Khatun",
    spouseName: "Md. Nazrul Islam",
    loan: {
      installmentAmount: 1550,
    },
  },
  {
    memberName: "Sajid Hasan",
    memberCode: 111003003,
    branchName: "Bogura Branch",
    samityName: "Uttoron",
    samityCode: 111003,
    workingArea: "Shajahanpur Upazila, Bogura, Bangladesh",
    fatherName: "Abdul Malek",
    motherName: "Ayesha Begum",
    spouseName: "Md. Kamal Hossain",
    loan: {
      installmentAmount: 1800,
    },
  },
  {
    memberName: "Ayesha Akter",
    memberCode: 111004001,
    branchName: "Cumilla Branch",
    samityName: "Nabodoy",
    samityCode: 111004,
    workingArea: "Debidwar Upazila, Cumilla, Bangladesh",
    fatherName: "Md. Siraj Uddin",
    motherName: "Salma Begum",
    spouseName: "Md. Rafiqul Islam",
    loan: {
      installmentAmount: 18000,
    },
  },
  {
    memberName: "Mohammad Rahim",
    memberCode: 111004002,
    branchName: "Rangpur Branch",
    samityName: "Shapla",
    samityCode: 111004,
    workingArea: "Mithapukur Upazila, Rangpur, Bangladesh",
    fatherName: "Abdul Jabbar",
    motherName: "Momena Begum",
    spouseName: "Md. Habibur Rahman",
    loan: {
      installmentAmount: 15500,
    },
  },
];

// this variable for store the match member's information or member object
let theMember;

// access the input field
const memberCodeField = document.querySelector("#member-code");
const transactionDate = document.querySelector("#transaction-date");
const popupContainer = document.querySelector("#info-popup-container");
const productNameContainer = document.querySelector("#product-name");
const productCodeField = document.querySelector("#product-code");
const amountField = document.querySelector("#amount");

// transactionDate.value = new Date().toLocaleDateString();
transactionDate.value = `${new Date().getFullYear()}-${
  new Date().getMonth() + 1
}-${new Date().getDate()}`;

// handler: member code field input
memberCodeField.addEventListener("input", () => {
  // get the member
  const codeOfMember = memberCodeField.value;

  // find the member
  const member = allMembers.find(
    (member) =>
      member?.memberCode === parseInt(codeOfMember) ||
      (member?.memberName).toLowerCase().trim() ===
        codeOfMember.toLowerCase().trim()
  );

  // store the member information
  theMember = member;

  // validation:: show & hide the popup
  if (member) {
    popupContainer.classList.remove("hide");
    popupContainer.classList.add("show");
  } else {
    popupContainer.classList.remove("show");
    popupContainer.classList.add("hide");
  }

  // display the member information in a container as popup
  popupContainer.innerHTML = `
              <h5 id="person-name" class="person-title">${member?.memberName}</h5>
              <h4 id="person-code" class="person-id">${member?.memberCode}</h4>
              <p class="person-info">Branch Name: ${member?.branchName}</p>
              <p class="person-info">Samity: ${member?.samityName}</p>
              <p class="person-info">working area: ${member?.workingArea}</p>
              <p class="person-info">Father/Mother/Spouse: ${member?.fatherName}/${member?.motherName}/${member?.spouseName}</p>

  `;
});

// handler:: member info popup container
popupContainer.addEventListener("click", () => {
  const pName = document.querySelector("#person-name").innerText;
  const pCode = document.querySelector("#person-code").innerText;

  // set member code field's value
  memberCodeField.value = `${pName} - ${pCode}`;

  // hide the popup after selecting
  popupContainer.classList.remove("show");
  popupContainer.classList.add("hide");
});

// handler:: generate the product code on selecting the product
productNameContainer.addEventListener("change", (event) => {
  // get the product name
  const productName =
    productNameContainer.options[event.target.selectedIndex].innerText;

  // get the member code
  const memberLongCode = memberCodeField.value.split("-");
  const memberCode = memberLongCode[1].trim();

  // generate the product code
  const productCode = `${productName}.${memberCode}`;

  // display the product code
  productCodeField.value = productCode;

  // get the installment amount and display it
  const amount = theMember?.loan?.installmentAmount;
  amountField.value = amount;
});
