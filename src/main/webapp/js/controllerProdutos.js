angular.module('appProdutos', [])
.controller('controllerProdutos', function($scope, $http) {
    $scope.produto = {};
   $scope.salvarProduto = function (){
       $http.post('https://servicocontrolepedidos.herokuapp.com/produto',$scope.produto).
        then(function(response) {
            if(response.data){
                $scope.mensagemProduto = "Produto cadastrado com sucesso!!!";
            }
            
        });
   };
    $scope.produtos = [];
    $scope.listarProdutos = function (){
       $http.get('https://servicocontrolepedidos.herokuapp.com/produto').
        then(function(response) {
            $scope.produtos = response.data;
        });
   };
});
