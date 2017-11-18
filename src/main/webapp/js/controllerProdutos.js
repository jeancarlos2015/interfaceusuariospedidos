angular.module('appProdutos', [])
        .controller('controllerProdutos', function ($scope, $http) {
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
                $http.get('https://servicocontrolepedidos.herokuapp.com/produto').
                        then(function (response) {
                            $scope.produtos = response.data;
                        });
            };

            $scope.produtos1 = [];
            $scope.nome1 = "";
            $scope.listarProdutosNome = function () {
                
                $http.get('https://servicocontrolepedidos.herokuapp.com/produto/listar/'+$scope.nome1).
                        then(function (response) {
                            $scope.produtos1 = response.data;
                        });
            };
        });
