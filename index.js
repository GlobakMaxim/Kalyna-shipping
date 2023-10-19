const countrySelect = document.getElementById("countries");
const shipmentTypeSelector = document.getElementsByName("shipment-type");
const widthInput = document.getElementById("calc-input-width");
const heightInput = document.getElementById("calc-input-height");
const lenghtInput = document.getElementById("calc-input-lenght");
const weightInput = document.getElementById("calc-input-weight");
const chargeableWeightTag = document.getElementById("chargeableWeight");
const rateTag = document.getElementById("rate");
const rateWeightTag = document.getElementById("rateWeight");
const resultTag = document.getElementById("result");
const alert = document.getElementById("alert");
const danger = document.getElementById("danger");
const resetButton = document.getElementById("reset");

let sortedCountries = countries.sort((a, b) => {
  if (a.priority < b.priority) {
    return 1;
  } else if (a.priority === b.priority) {
    return 0;
  } else {
    return -1;
  }
});

sortedCountries.forEach(option =>
  countrySelect.options?.add(new Option(option.name))
);
countrySelect.onchange = updateCountry;

shipmentTypeSelector.forEach(radio => {
  radio.onclick = handleShipmentTypeChange;
});

let calcInputs = document.getElementsByClassName("calc");
Array.from(calcInputs).forEach(input => { 
    input.onchange = calculate
});

resetButton.onclick = clear;

/// FUNCTIONS

function clear() {
  countrySelect.selectedIndex = 0;
  updateCountry();
  widthInput.value = null;
  heightInput.value = null;
  lenghtInput.value = null;
  weightInput.value = null;
  resultTag.textContent = null;
  alert.hidden = true;
  danger.hidden = true;
}

function handleShipmentTypeChange(event) {
  let shipmentType = event.currentTarget.value;
  let selectedCountry = countrySelect.options[countrySelect.selectedIndex].text;
  let countryObject = countries.find(country => country.name === selectedCountry);
  let info = countryObject[shipmentType];
  fillInfoTable(info);
  calculate();
}

function updateCountry() {
  resetShipmentType();
  resetInfoTable();
}

function resetShipmentType() {
  shipmentTypeSelector
    .forEach(option => option.checked = false);
}

function fillInfoTable(info) {
  document.getElementById("info-price").textContent = info.price;
  document.getElementById("info-fee").textContent = info.fee;
  document.getElementById("info-min-weight").textContent = info.minWeight;
  document.getElementById("info-max-weight").textContent = info.maxWeight;
  document.getElementById("info-delivery-time").textContent = info.aveDeliveryTime;
}

function resetInfoTable() {
  let table = document.getElementById("info");
  let tbody = table.getElementsByTagName("tbody")[0];
  let tr = tbody.getElementsByTagName("tr")[0];
  let tds = tr.getElementsByTagName("td");
  Array.from(tds).forEach(cell => cell.textContent = "-");
}

function calculate() {
  let width = Number(widthInput.value);
  let height = Number(heightInput.value);
  let lenght = Number(lenghtInput.value);
  let weight = Number(weightInput.value);

  let selectedCountry = countrySelect.options[countrySelect.selectedIndex].text;
  let countryObject = countries.find(
    country => country.name === selectedCountry
  );
  let shipmentType = Array.from(shipmentTypeSelector)
  .find(type => type.checked)?.value;
  let info = countryObject[shipmentType];
  alert.hidden = true;
  danger.hidden = true;

  if (info == null) {
    alert.hidden = false;
    alert.textContent = "Выберите старну и тип доставки";
    return;
  }

  if (width > 0 && height > 0 && lenght > 0 && weight > 0) {
    // continue
  } else {
    alert.hidden = false;
    alert.textContent = "Заполите все поля";
    return;
  }

  if (weight > info.maxWeight) {
    danger.hidden = false;
    danger.textContent = "Перевес!";
    return;
  }

  const ifAnySodeBiggerThanLimit = [width, height, lenght].some(side => side > info.sideLimit);
  if (ifAnySodeBiggerThanLimit) {
    alert.hidden = false;
    alert.textContent = `Одна из сторон больше ${info.sideLimit}см`;
    return;
  }

  // Check package dimension
  // the longest side + (2 * 2nd side) + (2 * 3rd side)
  let sides = [width, height, lenght].sort((a, b) => b - a);
  let packageDimension = sides[0] + 2 * sides[1] + 2 * sides[2];
  if (
    countryObject.packageDimension &&
    packageDimension > countryObject.packageDimension
  ) {
    alert.hidden = false;
    alert.textContent = `Сумма сторон (${packageDimension}см) превышает ${countryObject.packageDimension}см`;
    return;
  }

  let coefficient = shipmentType === "sea" ? 9000 : 6000;
  let size = width * height * lenght;
  let sizeValue = size / coefficient;

  let value = Math.max(sizeValue, info.minWeight, weight);
  var priceForWeight = value * info.price;
  let overwaightValue = 30;

  rateTag.textContent = info.price;
  chargeableWeightTag.textContent = value.toFixed(2);
  
  // We count overwaight only for real weight
  if (countryObject.overwaight && value > overwaightValue && value > sizeValue) {
    priceForWeight += (value - overwaightValue).toFixed(1) * 2; // Round to 0.1
  }
  rateWeightTag.textContent = priceForWeight.toFixed(2);

  let resultValue = info.fee + priceForWeight;
  let roundedResultValue = (Math.ceil(resultValue * 20) / 20).toFixed(2); // Rounded by 5 cents (0.05)
  resultTag.textContent = roundedResultValue;
}
