function processBarcode() {
    const input = document.getElementById('barcodeInput').value;
    const result = document.getElementById('pickingResult');
    if (input) {
        result.textContent = `Order for barcode ${input} has been successfully processed!`;
    } else {
        result.textContent = 'Please scan a valid barcode.';
    }
}

function startPacking() {
    const instructions = document.getElementById('packingInstructions');
    instructions.classList.toggle('hidden');
    alert(instructions.classList.contains('hidden') ? 'Packing instructions hidden!' : 'Packing instructions displayed!');
}