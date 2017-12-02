angular.module('appCliente', [])
        .controller('controllerClientes', function ($scope, $http) {
            $scope.cliente = {};
            $scope.cliente.nome = "jean";
            $scope.cliente.email = "jean@gmail.com";
            $scope.cliente.endereco = "Rua joao bosco 111";
            $scope.cliente.telefone = "3333-4444";
            $scope.cliente.cpf = "111.111.222-44";
            $scope.clientesalvo = {};
            $scope.salvarCliente = function () {
                $http.post('https://servicocontroleusuarios.herokuapp.com/cliente', $scope.cliente).
                        then(function (response) {
                            $scope.clientesalvo = response.data;
                        });
                $http.get("https://servicocontroleusuarios.herokuapp.com/cliente/existe", $scope.clientesalvo.idcliente).
                        then(function (response) {
                            if (response.data) {
                                $scope.mensagemCliente = "Cliente cadastrado com sucesso!!!";
                            } else {
                                $scope.mensagemCliente = "Cliente não foi cadastrado!!!";
                            }
                        });
            };
        });
