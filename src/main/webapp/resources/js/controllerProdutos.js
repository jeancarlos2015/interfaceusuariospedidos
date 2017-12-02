angular.module('appProduto', [])
        .controller('controllerProdutos', function ($scope, $http) {

            $scope.produtos = [];
            $scope.listarProdutos = function () {
                $http.get('https://servicocontrolepedidos.herokuapp.com/produto/size/2').
                        then(function (response) {
                            $scope.produtos = response.data;

                        });
            };

            $scope.produtos1 = [];
            $scope.nome = "";
            $scope.listarProdutosNome = function () {
                $http.get('https://servicocontrolepedidos.herokuapp.com/produto/listar/' + $scope.nome).
                        then(function (response) {
                            $scope.produtos1 = response.data;

                        });
            };
            $scope.pedido = {};
            $scope.pedido.precototal = 0.0;
            $scope.pedido.status = "pendente";
            $scope.pedido.idproduto = 0;
            $scope.pedido.datapedido = "";
            $scope.pedido.idcliente = 0;
            $scope.mensagemPedido="";
            
            $scope.salvarPedido = function () {
                $http.post('https://servicocontrolepedidos.herokuapp.com/pedido', $scope.pedido).
                        then(function (response) {
                            if (response.data) {
                                $scope.mensagemPedido = "Pedido cadastrado com sucesso!!!";
                            } else {
                                $scope.mensagemPedido = "Pedido não foi cadastrado!!!";
                            }

                        });
            };
            
        });

