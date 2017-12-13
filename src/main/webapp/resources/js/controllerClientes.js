angular.module('appCliente', [])
        .controller('controllerClientes', function ($scope, $http) {
            $scope.cliente={};
            
            $scope.salvarCliente = function (cliente) {
                $scope.mensagemCliente="Enviando...";
                $http.post('https://servicocontrolepedidos.herokuapp.com/cliente', cliente).
                        then(function (response) {
                            if (response.data) {
                                $scope.mensagemCliente = "Cliente cadastrado com sucesso!!!";
                            }

                        });
            };
            $scope.cpf="";
            $scope.buscarCliente = function (cpf) {
                
                $http.get('https://servicocontrolepedidos.herokuapp.com/cliente/'+cpf).
                        then(function (response) {
                            $scope.cliente = response.data;
                            $scope.mensagemCliente = response.data;
                        });
            };
         

        });
