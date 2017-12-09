angular.module('appCliente', [])
        .controller('controllerClientes', function ($scope, $http) {
            $scope.cliente = {};
            $scope.salvarCliente = function (cliente) {
                $http.post('https://servicocontroleusuarios.herokuapp.com/cliente', cliente).
                        then(function (response) {
                            if (response.data) {
                                $scope.mensagemCliente = "Cliente cadastrado com sucesso!!!";
                            }

                        });
            };
            
            
         

        });
