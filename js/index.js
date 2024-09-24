const blogBtn = document.getElementById("blogBtn");
const donationBtn = document.getElementById("donationBtn");
const historyBtn = document.getElementById("historyBtn");
const noakhaliDonationButton = document.getElementById(
  "noakhaliDonationButton"
);

blogBtn.addEventListener("click", function () {
  window.location.href = "blog.html";
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
  } else {
    let noakhaliFundInput = parseFloat(inputValue);

    let noakhaliTotalFund = parseFloat(
      document.getElementById("noakhaliTotalFund").innerText
    );

    noakhaliTotalFund += noakhaliFundInput;

    document.getElementById("noakhaliTotalFund").innerText = noakhaliTotalFund;
  }
  document.getElementById("noakhaliFundInput").value = "";
});
