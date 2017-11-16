angular.module('appNotificacao', [])
.controller('controllerNotificacoes', function($scope, $http) {
    $scope.notificacao = {};
   $scope.salvarNotificacao = function (){
       $http.post('https://servicogerentefornecedor.herokuapp.com/notificacao',$scope.notificacao).
        then(function(response) {
            if(response.data){
                $scope.mensagemCliente = "Notificacao cadastrado com sucesso!!!";
            }
            
        });
   };
       
});
