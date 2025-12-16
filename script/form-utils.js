// fake data
const all = [
  {
    memberName: "Amina Khatun",
    memberCode: 111001001,
    branchName: "Rajshahi Branch",
    samityName: "Alor Path-1",
    workingArea: "Paba Upazila, Rajshahi, Bangladesh",
    fatherName: "Abdul Karim",
    motherName: "Rokeya Begum",
    spouseName: "Md. Selim Hossain",
  },
  {
    memberName: "Shahana Begum",
    memberCode: 222002002,
    branchName: "Rajshahi Branch",
    samityName: "Alor Path-2",
    workingArea: "Paba Upazila, Rajshahi, Bangladesh",
    fatherName: "Md. Yunus Ali",
    motherName: "Rahima Khatun",
    spouseName: "Md. Nazrul Islam",
  },
  {
    memberName: "Rahima Akter",
    memberCode: 333003003,
    branchName: "Bogura Branch",
    samityName: "Uttoron",
    workingArea: "Shajahanpur Upazila, Bogura, Bangladesh",
    fatherName: "Abdul Malek",
    motherName: "Ayesha Begum",
    spouseName: "Md. Kamal Hossain",
  },
  {
    memberName: "Nasima Begum",
    memberCode: 444004004,
    branchName: "Cumilla Branch",
    samityName: "Nabodoy",
    workingArea: "Debidwar Upazila, Cumilla, Bangladesh",
    fatherName: "Md. Siraj Uddin",
    motherName: "Salma Begum",
    spouseName: "Md. Rafiqul Islam",
  },
  {
    memberName: "Parvin Akter",
    memberCode: 555005005,
    branchName: "Rangpur Branch",
    samityName: "Shapla",
    workingArea: "Mithapukur Upazila, Rangpur, Bangladesh",
    fatherName: "Abdul Jabbar",
    motherName: "Momena Begum",
    spouseName: "Md. Habibur Rahman",
  },
];

// access the input field
const memberCodeField = document.querySelector("#member-code");
const transactionDate = document.querySelector("#transaction-date");
const popupContainer = document.querySelector("#info-popup-container");
const productNameContainer = document.querySelector("#product-name");
const productCodeField = document.querySelector("#product-code");

// transactionDate.value = new Date().toLocaleDateString();
transactionDate.value = `${new Date().getFullYear()}-${
  new Date().getMonth() + 1
}-${new Date().getDate()}`;

// handler: member code field input
memberCodeField.addEventListener("input", () => {
  // get the member
  const codeOfMember = parseInt(memberCodeField.value);
  const member = all.find(
    (member) =>
      member?.memberCode === codeOfMember || member?.memberName === codeOfMember
  );

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
});
