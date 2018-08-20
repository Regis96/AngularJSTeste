angular.module('myApp', [])
    .controller('myController',function($scope){
        $scope.app = 'Lista Telefonica';
        $scope.contatos = [
            {nome : 'Pedro', telefone: '999999999', operadora: {nome : 'Vivo', codigo: 15,categoria : 'Celular'}, cor : 'red'},
            {nome : 'Ana', telefone: '999999998',operadora: {nome : 'Tim', codigo: 16,categoria : 'Celular'}, cor : 'blue'},
            {nome : 'Maria', telefone: '999999997', operadora: {nome : 'Claro', codigo: 17,categoria : 'Celular'}, cor : 'yellow'}
        ];
        $scope.operadoras = [
            {nome : 'Oi', codigo: 14,categoria : 'Celular'},
            {nome : 'Vivo', codigo: 15,categoria : 'Celular'},
            {nome : 'Tim', codigo: 16,categoria : 'Celular'},
            {nome : 'Claro', codigo: 17,categoria : 'Celular'},
            {nome : 'Net', codigo: 18,categoria : 'Fixo'},
            {nome : 'Gvt', codigo: 19,categoria : 'Fixo'},
        ];
        $scope.adicionarContato = function(contato){
            $scope.contatos.push(contato);
            delete $scope.contato;
        }

        $scope.apagarContatos = function(contatos){
            $scope.contatos = contatos.filter(contato => {
                if(!contato.selecionado){
                    return contato;
                }
            });
        }

        $scope.isContatoSelecionado = function(contatos){
            return contatos.some(contato => {
                return contato.selecionado;
            });
        }
    });
