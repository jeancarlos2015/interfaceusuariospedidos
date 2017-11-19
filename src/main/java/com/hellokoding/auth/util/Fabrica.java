/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hellokoding.auth.util;


import com.hellokoding.auth.cdp.User;



/**
 *
 * @author jean
 */
public class Fabrica {

    /**
     *
     * @param tipo
     * @return
     */
    public static Fabrica make(Tipo tipo) {
        switch (tipo) {
            case USUARIO:
                return new FabricaUsuario();
            default:
                return new Fabrica();

        }
    }

    //Metodo será sobrescrito pela fabricaUsuario
    public User criaUsuario() {
        throw new UnsupportedOperationException();
    }

  

}
