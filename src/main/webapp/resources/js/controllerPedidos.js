angular.module('appPedidos', [])
        .controller('controllerPedidos', function ($scope, $http) {
            


          
            $scope.pedidos = [];
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

