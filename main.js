document.getElementById('converterForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  var pesos = parseFloat(document.getElementById('pesos').value);
  
  const url = 'https://dolarapi.com/v1/dolares/blue';

  try {
      const response = await fetch(url);
      const data = await response.json();
      const valorDolarBlue = parseFloat(data.venta);
      const dolaresBlue = pesos / valorDolarBlue;
      document.getElementById('result').textContent = 'DOLAR BLUE: 💲' + dolaresBlue.toFixed(2);
      document.getElementById('pesos').value = ''; // Borrar el valor del campo 'result'
  } catch (error) {
      console.error('Hubo un problema al obtener el valor del dólar blue:', error);
  }
});

/*document.getElementById('converterForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var pesos = parseInt(document.getElementById('pesos').value);
  var dolaresBlue = pesos * 2;
  document.getElementById('result').textContent = 'DOLAR BLUE: ' + dolaresBlue.toFixed(2);
});

const obtenerDolarBlue = async () => {
  const url = 'https://dolarapi.com/v1/dolares/blue';
  const requestData = await fetch(url);

  const data = await requestData.json();

  return data;
}

const calcularDolarBlue = async (pesos) => {
  const dividir = await obtenerDolarBlue();

  return parseInt(pesos) / dividir.venta;
}
*/
