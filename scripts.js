// Configuração de QuaggaJS
Quagga.init({
    inputStream: {
      name: "Live",
      type: "LiveStream",
      target: document.querySelector('#video'),
      constraints: {
        facingMode: "environment" // Utiliza a câmera traseira (se disponível)
      }
    },
    decoder: {
      readers: ["ean_reader"]
    }
  }, function(err) {
    if (err) {
      console.error('Erro ao iniciar Quagga:', err);
      return;
    }
    console.log('Quagga inicializado com sucesso.');
    Quagga.start();
  });
  
  // Registro de callback para quando um código de barras é detectado
  Quagga.onDetected(function(result) {
    var code = result.codeResult.code;
    console.log('Código de barras detectado:', code);
    document.getElementById('resultado').textContent = 'Código de barras: ' + code;
  });
  