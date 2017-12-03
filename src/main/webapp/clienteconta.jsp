<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<c:set var="contextPath" value="${pageContext.request.contextPath}"/>
<!DOCTYPE html>
<html lang="en" ng-app="appProduto" ng-controller="controllerProdutos">
    <head>
        <meta charset="utf-8">
        <title>SISTEX</title>

        <!-- Google Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500,500i,600,600i,700" rel="stylesheet">

        <!-- Template Styles -->
        <link rel="stylesheet" href="resources/css/font-awesome.min.css">

        <!-- CSS Reset -->
        <link rel="stylesheet" href="resources/css/normalize.css">

        <!-- Milligram CSS minified -->
        <link rel="stylesheet" href="resources/css/milligram.min.css">

        <!-- Main Styles -->
        <link rel="stylesheet" href="resources/css/styles.css">


        <script src="resources/js/chart.min.js"></script>
        <script src="resources/js/chart-data.js"></script>
        <script src="resources/js/script.js"></script>
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
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
        <link href="https://fonts.googleapis.com/css?family=Lato:400,300,700" rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link rel="icon" href="resources/images/icon.png">

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
        <script src="https://code.angularjs.org/1.5.8/angular-route.min.js"></script>
        <script src="resources/js/controllerProdutos.js"></script>
    </head>

    <body>
        
        <c:if test="${pageContext.request.userPrincipal.name != null}">

            <form id="logoutForm" method="POST" action="${contextPath}/logout">
                <h2>${_csrf.token}</h2>
                <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
            </form>

            <h2>Bem Vindo ${pageContext.request.userPrincipal.name} | <a onclick="document.forms['logoutForm'].submit()">Sair</a></h2>
            <br>
        </c:if>
        <div class="navbar">
            <div class="row">
                <div class="column column-30">
                    <div class="user-section"><a href="#">
                            <img src="http://via.placeholder.com/50x50" alt="profile photo" class="circle float-left profile-photo" width="50" height="auto">
                            <div class="username">
                                <h4>Pedidos</h4>
                                <!--                                <p>Administrador</p>-->
                            </div>
                        </a></div>
                </div>
            </div>
        </div>
        <div class="row">
            <div id="sidebar" class="column">
                <h5>Navega��o</h5>
                <ul>
                    <li><a href="clienteconta"><em class="fa fa-home"></em> Inicio</a></li>
                    <li><a href="pedidos.jsp"><em class="fa fa-forward"></em>Pedidos</a></li>
                </ul>
            </div>


            <section id="main-content" class="column column-offset-20">
<!--                <h5 class="mt-2">Informa��es</h5><a class="anchor" name="widgets"></a>-->
                <h3 class="mt-2 wow fadeInUp" data-wow-delay="0.3s"> Informa��es</h3>
                <div class="row grid-responsive mt-1">
                    <div class="column">
                        <div class="card">
                            <div class="card-title">
                                <h2 class="float-left">Produtos</h2>
                                <div class="badge background-primary float-right">36</div>
                                <div class="clearfix"></div>
                                <form class="navbar-form" ng-click="listarProdutosNome()">
                                    <div class="form-group" style="display:inline;">
                                        <div class="input-group" style="display:table;">
                                            <span class="input-group-addon" style="width:1%;"><span class="glyphicon glyphicon-search"></span></span>
                                            <input class="form-control" name="nome" placeholder="Pesquise Aqui o Produto" autocomplete="off" autofocus="autofocus" type="text" ng-model="nome">
                                            <input class="hidden" type="submit" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <ul class="slides">

                                <li class="slide">
                                    <div ng-repeat="p in produtos1">
                                        <div class="card-block">
                                            <div class="mt-1">
                                                <img src="resources/{{p.imageStr}}"  class="circle float-left profile-photo" width="200" height="auto">
                                                <div class="ml-1 direita">
                                                    <p class="m-0"><strong>{{p.nome}}</strong> <span class="text-muted">{{p.descricao}}</span></p>
                                                    <p class="text-small text-muted">Pre�o:{{p.preco}},00</p>
                                                </div>
                                                <div class="clearfix"></div>
                                                <hr class="m-0 mb-2" />
                                                <form>
                                                    <input  type="text"   ng-value="{{p.idproduto}}" id="{{p.idproduto}}"  ng-model="pedido.idproduto">
                                                    <input  type="text" ng-value="{{p.preco}}" id="{{p.preco}}" ng-model="pedido.precototal">
                                                    <input type="button" ng-click="salvarPedido()" value="Comprar">
                                                </form>
                                                <h3>{{mensagemPedido}}</h3>
                                            </div>
                                        </div>
                                    </div>
                            </ul>

                        </div>
                    </div>

                </div>
                
                <div class="row grid-responsive mt-2">
                    <div class="column">
                        <div class="card">
                            <div class="card-title">
                                <h2 class="float-left">STATUS DOS PEDIDOS</h2>
                                <div class="badge background-primary float-right">36</div>
                                <div class="clearfix"></div>
                            </div>
                            <ul class="slides">

                                <li class="slide">
                                    <div ng-init="p in produtos1">
                                        <div class="card-block">
                                            <div class="mt-1">
                                                <img src="resources/{{p.imageStr}}"  alt="produto " class="circle float-left profile-photo" width="45" height="auto">
                                                <div class="float-left ml-1">
                                                    <p class="m-0"><strong>{{p.nome}}</strong> <span class="text-muted">{{p.descricao}}</span></p>
                                                    <p class="text-small text-muted">Pre�o:{{p.preco}},00</p>
                                                </div>
                                                <div class="clearfix"></div>
                                                <hr class="m-0 mb-2" />
                                                <form>
                                                    <button>Cancelar</button>
                                                </form>
                                                
                                            </div>
                                        </div>
                                    </div>
                            </ul>

                        </div>
                    </div>

                </div>

            </section>





        </div>

    </body>
</html> 
