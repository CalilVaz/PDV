// Função para buscar dados do produto pelo código de barras
function buscarProdutoPorCodigoDeBarras(codigoDeBarras) {
    // URL da API Open Food Facts
    var apiUrl = "https://world.openfoodfacts.org/api/v0/product/" + codigoDeBarras + ".json";

    // Fazendo uma requisição HTTP GET para a API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Manipula os dados recebidos
            console.log(data.product.product_name);
            console.log(data.product.brands);
            // Aqui você pode processar os dados do produto
        
        }) 
        .catch(error => {
            // Trata erros
            console.error('Erro ao buscar produto:', error);
        });
}

// Exemplo de uso
var codigoDeBarras = "7891000325858";
buscarProdutoPorCodigoDeBarras(codigoDeBarras);
