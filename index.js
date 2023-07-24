document.getElementById('calculateBtn').addEventListener('click', function () {
    const weight = parseFloat(document.getElementById('weight').value);
    const weightUnit = document.getElementById('weightUnit').value;
    const height = parseFloat(document.getElementById('height').value);
    const heightUnit = document.getElementById('heightUnit').value;

    // Convert weight and height to kg and cm respectively if needed
    const weightInKg = weightUnit === 'kg' ? weight : weight * 0.453592;
    const heightInCm = heightUnit === 'cm' ? height : height * 2.54;

    // Calculate BMI
    const bmi = weightInKg / ((heightInCm / 100) ** 2);

    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Your BMI: ${bmi.toFixed(2)}`;

    // Scroll to the result
    resultDiv.scrollIntoView({ behavior: 'smooth' });
});
