angular.module('appProduto', [])
        .controller('controllerProdutos', function ($scope, $http,$rootScope) {

            $scope.produtos = [];
            $scope.listarProdutos = function () {
                $http.get('https://servicocontrolepedidos.herokuapp.com/produto/size/2').
                        then(function (response) {
                            $scope.produtos = response.data;

                        });
            };

            $scope.produtos1 = [];
            $scope.nomeproduto = "";
            $scope.listarProdutosNome = function () {
                $http.get('https://servicocontrolepedidos.herokuapp.com/produto/listar/' + $scope.nomeproduto).
                        then(function (response) {
                            $scope.produtos1 = response.data;

                        });
            };
            $scope.pedido = {};
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
            $scope.pedidos=[];
            $scope.listarPedidos = function () {
                $http.get('https://servicocontrolepedidos.herokuapp.com/pedido').
                        then(function (response) {
                           $scope.pedidos = response.data;
                        });
            };
            
              $scope.cliente = {};
            $scope.cliente.idcliente = 0;
            $scope.cliente.cpf="";
            $scope.cliente.datanascimento="";
            $scope.cliente.email="";
            $scope.cliente.endereco="";
            $scope.cliente.nome="";
            $scope.cliente.telefone="";
            $rootScope.clientesalvo={};
            $scope.salvarCliente = function () {
                $http.post('https://servicocontrolepedidos.herokuapp.com/cliente', $scope.cliente).
                        then(function (response) {
                            $rootScope.clientesalvo = response.data;
                            $scope.mensagemCliente="O cliente "+$rootScope.clientesalvo.nome+" foi salvo";
                        });
            };
        });

