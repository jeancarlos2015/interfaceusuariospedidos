<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<c:set var="contextPath" value="${pageContext.request.contextPath}"/>

<!DOCTYPE html>
<html lang="en" ng-app="appProduto" ng-controller="controllerProdutos">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <meta name="description" content="">
        <meta name="author" content="">
        <link rel="stylesheet" href="resources/css/style.css">
        <link rel="stylesheet" href="resources/css/animate.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script src="${contextPath}/resources/js/bootstrap.min.js"></script>
        <script src="resources/jswow.min.js" type="text/javascript"></script>
        <script type="text/javascript" src="resources/js/MyJQ.js"></script>
        <script src="resources/js/jquery.localScroll.min.js" type="text/javascript"></script>
        <script src="resources/js/jquery.scrollTo.min.js" type="text/javascript"></script> 
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
        <script type="text/javascript" src="resources/js/scrollfunction.js"></script>
        <script type="text/javascript" src="resources/js/wow.min.js"></script>
        <script type="text/javascript" src="resources/js/init.js"></script>
        <script type="text/javascript" src="resources/js/manipulaTela1.js"></script>
        <script type="text/javascript" src="resources/js/controllerProdutos.js"></script>
    </head>

    <body>

        <div class="bookonlinewrapper container">
            <div class="container" id="bookonline">
                <h3 class="wow fadeInUp" data-wow-delay="0.3s">TERMINE O CADASTRO</h3>
            </div>

            <div class="form-group">
                <input type="text" class="form-control name"  placeholder="Seu Nome" ng-model="cliente.nome" required/>
            </div>

            <div class="form-group">
                <input type="text" class="form-control name"   placeholder="Seu Email" ng-model="cliente.email" required/>
            </div>

            <div class="form-group">
                <input type="text" class="form-control name"  placeholder="Seu Telefone" ng-model="cliente.telefone" required/>
            </div>

            <div class="form-group">
                <input type="text" class="form-control name" placeholder="Seu Endereço" ng-model="cliente.endereco" required/>
            </div>

            <div class="form-group">
                <input type="text" class="form-control name"  placeholder="CPF SÓ NUMEROS" required="" name="numbers" pattern="[0-9]+$" ng-model="cliente.cpf"/>
            </div>

            <div class="form-group">
                <input type="text"  data-format="dd-MM-yyyy"  class="form-control name" placeholder="Sua Data de Nascimento" ng-model="cliente.datanascimento" required/>
            </div>
            <button class="booknow wow fadeInUp" type="submit" ng-click="salvarCliente()">Cadastrar</button>

            <br>
            <h3> {{mensagemCliente}} </h3>
            <br>
            <form action="login">
                <button class="booknow wow fadeInUp" type="submit">Voltar para Login</button>
            </form>
        </div>
        <!-- /container -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script src="${contextPath}/resources/js/bootstrap.min.js"></script>
    </body>
</html>
