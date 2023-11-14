function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
  
    if (weight > 0 && height > 0) {
      const bmi = weight / (height * height);
      displayResult(bmi);
      checkBMIStatus(bmi);
    } else {
      displayResult('Por favor, insira valores válidos.');
    }
  }
  
  function displayResult(result) {
    document.getElementById('result').innerText = `IMC: ${result}`;
  }
  
  function checkBMIStatus(bmi) {
    let message = '';
    if (bmi < 18.5) {
      message = 'Abaixo do peso';
    } else if (bmi >= 18.5 && bmi < 25) {
      message = 'Peso normal';
    } else if (bmi >= 25 && bmi < 30) {
      message = 'Acima do peso';
    } else {
      message = 'Obeso';
    }
    alert(`Você está: ${message}`);
  }
  