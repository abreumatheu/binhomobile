document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
    this.classList.toggle('active');
});

document.getElementById('form-assistencia').addEventListener('submit', function(event) {
    event.preventDefault();

    var tipoServico = document.getElementById('tipo-servico').value;
    var localizacao = document.getElementById('localizacao').value;

    var mensagem = `Solicitação de Assistência:
Tipo de Serviço: ${tipoServico}
Localização Atual: ${localizacao}`;

    var telefone = '5511949581246';
    var url = `https://api.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(mensagem)}&app_absent=0`;
    window.open(url, '_blank');
});

// Função para obter a localização atual do usuário
function obterLocalizacao() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var localizacao = `https://www.google.com/maps?q=${latitude},${longitude}`;
            document.getElementById('localizacao').value = localizacao;
        }, function(error) {
            alert('Não foi possível obter a localização. Por favor, tente novamente.');
        });
    } else {
        alert('Geolocalização não é suportada neste navegador.');
    }
}
