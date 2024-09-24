const blogBtn = document.getElementById("blogBtn");
const donationBtn = document.getElementById("donationBtn");
const historyBtn = document.getElementById("historyBtn");
const noakhaliDonationButton = document.getElementById(
  "noakhaliDonationButton"
);
const feniDonationButton = document.getElementById("feniDonationButton");

const quotaDonationButton = document.getElementById("quotaDonationButton");

let noakhaliTotalFund = parseFloat(
  document.getElementById("noakhaliTotalFund").innerText
);

let feniTotalFund = parseFloat(
  document.getElementById("feniTotalFund").innerText
);

let quotaTotalFund = parseFloat(
  document.getElementById("quotaTotalFund").innerText
);

let defaultAmount = parseFloat(
  document.getElementById("defaultAmount").innerText
);

blogBtn.addEventListener("click", function () {
  window.location.href = "/batch10-assignment5/blog.html";
});

historyBtn.addEventListener("click", function () {
  historyBtn.classList.remove(
    "border",
    "border-fontColorPera2",
    "hover:border-fontColorPera2",
    "hover:border-0"
  );

  historyBtn.classList.add(
    "btn-success",
    "bg-btnPrimaryColor",
    "hover:bg-btnHoverColor",
    "lg:px-8",
    "border-0",
    "font-semibold"
  );
  donationBtn.classList.remove(
    "font-semibold",
    "btn-success",
    "bg-btnPrimaryColor",
    "hover:bg-btnHoverColor",
    "lg:px-8",
    "border-0"
  );
  donationBtn.classList.add(
    "border",
    "border-fontColorPera2",
    "hover:border-fontColorPera2",
    "hover:border-0"
  );

  toggleButton("historySection");
});

donationBtn.addEventListener("click", function () {
  donationBtn.classList.remove(
    "border",
    "border-fontColorPera2",
    "hover:border-fontColorPera2",
    "hover:border-0"
  );

  donationBtn.classList.add(
    "btn-success",
    "bg-btnPrimaryColor",
    "hover:bg-btnHoverColor",
    "lg:px-8",
    "border-0",
    "font-semibold"
  );
  historyBtn.classList.remove(
    "font-semibold",
    "btn-success",
    "bg-btnPrimaryColor",
    "hover:bg-btnHoverColor",
    "lg:px-8",
    "border-0"
  );
  historyBtn.classList.add(
    "border",
    "border-fontColorPera2",
    "hover:border-fontColorPera2",
    "hover:border-0"
  );

  toggleButton("donatingSection");
});

noakhaliDonationButton.addEventListener("click", function () {
  let inputValue = getInputFieldValue("noakhaliFundInput");

  if (isNaN(inputValue) || inputValue == 0) {
    alert("Invalid donation amount");

    // document.getElementById("modalShow").classList.add("hidden");
  } else {
    let noakhaliFundInput = parseFloat(inputValue);

    noakhaliTotalFund = addition(noakhaliTotalFund, noakhaliFundInput);

    defaultAmount = subtraction(defaultAmount, noakhaliFundInput);

    if (defaultAmount < 0) {
      alert("Invalid Input");
    } else {
      document.getElementById("noakhaliTotalFund").innerText =
        noakhaliTotalFund;

      document.getElementById("defaultAmount").innerText = defaultAmount;
      document
        .getElementById("noakhaliDonationButton")
        .setAttribute("onclick", "my_modal_1.showModal()");

      let timeAndDate = new Date();

      const h2 = document.createElement("h2");

      h2.textContent = `${noakhaliFundInput} tk is Donate for Flood at Noakhali, Bangladesh`;
      h2.className = "text-fontColorHeading font-bold text-xl"; // Add a class name
      h2.id = "historyHeading";
      let parentElement = document.getElementById("historyBox");
      parentElement.appendChild(h2);

      const p = document.createElement("p");

      p.textContent = `Date: ${timeAndDate}`;
      p.className = "text-fontColorPera font-light text-base"; // Add a class name
      p.id = "historyTimeAndDate";
      parentElement = document.getElementById("historyBox");
      parentElement.appendChild(p);
    }
  }
  document.getElementById("noakhaliFundInput").value = "";
});

feniDonationButton.addEventListener("click", function () {
  let inputValue = getInputFieldValue("feniFundInput");

  if (isNaN(inputValue) || inputValue == 0) {
    alert("Invalid donation amount");

    // document.getElementById("modalShow").classList.add("hidden");
  } else {
    let feniFundInput = parseFloat(inputValue);

    feniTotalFund = addition(feniTotalFund, feniFundInput);

    defaultAmount = subtraction(defaultAmount, feniFundInput);

    if (defaultAmount < 0) {
      alert("Invalid Input");
    } else {
      document.getElementById("feniTotalFund").innerText = feniTotalFund;

      document.getElementById("defaultAmount").innerText = defaultAmount;

      document
        .getElementById("noakhaliDonationButton")
        .setAttribute("onclick", "my_modal_2.showModal()");

      let timeAndDate = new Date();

      const h2 = document.createElement("h2");

      h2.textContent = `${noakhaliFundInput} tk is Donate for Flood at Noakhali, Bangladesh`;
      h2.className = "text-fontColorHeading font-bold text-xl"; // Add a class name
      h2.id = "historyHeading";
      let parentElement = document.getElementById("historyBox");
      parentElement.appendChild(h2);

      const p = document.createElement("p");

      p.textContent = `Date: ${timeAndDate}`;
      p.className = "text-fontColorPera font-light text-base"; // Add a class name
      p.id = "historyTimeAndDate";
      parentElement = document.getElementById("historyBox");
      parentElement.appendChild(p);
    }
  }
  document.getElementById("feniFundInput").value = "";
});

quotaDonationButton.addEventListener("click", function () {
  let inputValue = getInputFieldValue("quotaFundInput");

  if (isNaN(inputValue) || inputValue == 0) {
    alert("Invalid donation amount");

    // document.getElementById("modalShow").classList.add("hidden");
  } else {
    let quotaFundInput = parseFloat(inputValue);

    quotaTotalFund = addition(quotaTotalFund, quotaFundInput);

    defaultAmount = subtraction(defaultAmount, quotaFundInput);

    if (defaultAmount < 0) {
      alert("Invalid Input");
    } else {
      document.getElementById("quotaTotalFund").innerText = quotaTotalFund;

      document.getElementById("defaultAmount").innerText = defaultAmount;

      document
        .getElementById("noakhaliDonationButton")
        .setAttribute("onclick", "my_modal_3.showModal()");

      let timeAndDate = new Date();

      const h2 = document.createElement("h2");

      h2.textContent = `${noakhaliFundInput} tk is Donate for Flood at Noakhali, Bangladesh`;
      h2.className = "text-fontColorHeading font-bold text-xl"; // Add a class name
      h2.id = "historyHeading";
      let parentElement = document.getElementById("historyBox");
      parentElement.appendChild(h2);

      const p = document.createElement("p");

      p.textContent = `Date: ${timeAndDate}`;
      p.className = "text-fontColorPera font-light text-base"; // Add a class name
      p.id = "historyTimeAndDate";
      parentElement = document.getElementById("historyBox");
      parentElement.appendChild(p);
    }
  }
  document.getElementById("quotaFundInput").value = "";
});
