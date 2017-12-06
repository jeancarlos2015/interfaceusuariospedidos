angular.module('appFuncionario', [])
        .controller('controllerFuncionarios', function ($scope, $http, $rootScope) {

            $scope.funcionario = {};
            $scope.funcionario.idfuncionario = 0;
            $scope.funcionario.rg = "";
            $scope.funcionario.datanascimento = "";
            $scope.funcionario.email = "";
            $scope.funcionario.endereco = "";
            $scope.funcionario.nome = "";
            $scope.funcionario.telefone = "";
            $rootScope.funcionariosalvo = {};
            $scope.salvarFuncionario = function () {
                $http.post('https://servicogerentefornecedor.herokuapp.com/funcionario', $scope.funcionario).
                        then(function (response) {
                            $rootScope.funcionariosalvo = response.data;
                            $scope.mensagemFuncionario = "O funcionario " + $rootScope.funcionariosalvo.nome + " foi salvo";
                        });
            };
        });

