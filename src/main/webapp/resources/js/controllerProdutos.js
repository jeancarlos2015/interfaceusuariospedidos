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


            $scope.produto = {};
            $scope.salvarPedido = function (produto) {
                var pedido = {};
                pedido.precototal = produto.preco;
                pedido.status = "pendente";
                pedido.idproduto = produto.idproduto;
                pedido.descricao = produto.descricao;
                $http.post('https://servicocontrolepedidos.herokuapp.com/pedido', pedido).
                        then(function (response) {
                            if (response.data) {
                                $scope.mensagemPedido = "Pedido cadastrado com sucesso!!!";
                                $scope.pedidos.push(pedido);
                            } else {
                                $scope.mensagemPedido = "Pedido não foi cadastrado!!!";
                            }
                        });
            };




            $scope.pedidos = [];
            $scope.listarPedidos = function () {
                $http.get('https://servicocontrolepedidos.herokuapp.com/pedido').
                        then(function (response) {
                            $scope.pedidos = response.data;
                        });
            };

            $scope.cancelarPedido = function (pedido) {
                $http.delete('https://servicocontrolepedidos.herokuapp.com/pedido/' + pedido.idpedido).
                        then(function (response) {
                            indice = $scope.pedidos.indexOf(pedido);
                            $scope.pedidos.splice(indice, 1);
                        });
            };

        });



