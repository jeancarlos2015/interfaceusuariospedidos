angular.module('appUsuario', [])
        .controller('controllerUsuarios', function ($scope, $http) {
            $scope.usuario = {};
            $scope.passConfirm = "";
            $scope.salvarUsuario = function () {
                if ($scope.passConfirm === $scope.usuario.pass && $scope.usuario.pass !== "") {
                    $http.post('https://servicocontroleusuarios.herokuapp.com/usuario', $scope.usuario).
                            then(function (response) {
                                if (response.data) {
                                    $scope.mensagemUsuario = "Usuario cadastrado com sucesso!!!";
                                } else {
                                    $scope.mensagemUsuario = "Use um cadastro diferente !!!";
                                }
                            });

                } else {
                    $scope.mensagemUsuario = "Existem campos em branco ou as senhas não conferem";
                }
                ;

            };
            $scope.usuarioautent = {};
            $scope.autenticarUsuario = function () {

                $http.post('https://servicocontroleusuarios.herokuapp.com/usuario/autenticar', $scope.usuarioautent).
                        then(function (response) {
                            if (response.data) {
                                
                                $scope.mensagemUsuario = "conta liberada, em fase de teste";
                            }else{
                                $scope.mensagemUsuario = "Usuário ou senha inválidos!!!";
                            };

                        });
             
            };
        });
