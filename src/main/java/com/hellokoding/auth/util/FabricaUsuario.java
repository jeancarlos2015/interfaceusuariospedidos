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
class FabricaUsuario extends Fabrica {

    @Override
    public User criaUsuario() {
        return new User();
    }

}
