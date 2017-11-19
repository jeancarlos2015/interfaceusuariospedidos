package com.hellokoding.auth.cgt;

public interface SecurityService {
    String findLoggedInUsername();

    void autologin(String username, String password);
}
