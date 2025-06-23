const inputValue = document.getElementById("inputValue");
const inputUnit = document.getElementById("inputUnit");
const convertBtn = document.getElementById("convertBtn");
const resultsDiv = document.getElementById("results");

// Conversion map (base: Bytes)
const unitValues = {
  B: 1,
  KB: 1024,
  MB: 1024 ** 2,
  GB: 1024 ** 3,
  TB: 1024 ** 4,
};

convertBtn.addEventListener("click", () => {
  const value = parseFloat(inputValue.value);
  const unit = inputUnit.value;

  if (isNaN(value) || value < 0) {
    resultsDiv.innerHTML = "<p>Please enter a valid positive number.</p>";
    return;
  }

  // Convert to bytes first
  const bytes = value * unitValues[unit];

  // Display results in all units
  const results = `
    <p><strong>Bytes (B):</strong> ${bytes.toLocaleString()}</p>
    <p><strong>Kilobytes (KB):</strong> ${(bytes / unitValues.KB).toFixed(4)}</p>
    <p><strong>Megabytes (MB):</strong> ${(bytes / unitValues.MB).toFixed(4)}</p>
    <p><strong>Gigabytes (GB):</strong> ${(bytes / unitValues.GB).toFixed(6)}</p>
    <p><strong>Terabytes (TB):</strong> ${(bytes / unitValues.TB).toFixed(8)}</p>
  `;

  resultsDiv.innerHTML = results;
});

const themeSwitcher = document.getElementById("themeSwitcher");

themeSwitcher.addEventListener("change", () => {
  document.body.classList.toggle("dark", themeSwitcher.checked);
});
