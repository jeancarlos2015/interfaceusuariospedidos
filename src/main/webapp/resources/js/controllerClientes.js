angular.module('appCliente', [])
        .controller('controllerClientes', function ($scope, $http) {
            $scope.cliente = {};
            $scope.salvarCliente = function () {
                $http.post('https://servicocontroleusuarios.herokuapp.com/cliente', $scope.cliente).
                        then(function (response) {
                            if (response.data) {
                                $scope.mensagemCliente = "Cliente cadastrado com sucesso!!!";
                            } else {
                                $scope.mensagemCliente = "Cliente não foi cadastrado!!!";
                            }

                        });
            };



            $scope.produto = {};
            $scope.salvarProduto = function () {
                $http.post('https://servicocontrolepedidos.herokuapp.com/produto', $scope.produto).
                        then(function (response) {
                            if (response.data) {
                                $scope.mensagemProduto = "Produto cadastrado com sucesso!!!";
                            }

                        });
            };
            $scope.produtos = [];
            $scope.listarProdutos = function () {
                $http.get('https://servicocontrolepedidos.herokuapp.com/produto/size/3').
                        then(function (response) {
                            $scope.produtos = response.data;

                        });
            };

            $scope.produtos = [];
            $scope.nome = {};
            $scope.listarProdutosNome = function () {
                $http.get('https://servicocontrolepedidos.herokuapp.com/produto/listar/', $scope.nome).
                        then(function (response) {
                            $scope.produtos = response.data;

                        });
            };


        });