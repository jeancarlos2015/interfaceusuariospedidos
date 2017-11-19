package com.hellokoding.auth.cgt;

import com.hellokoding.auth.cdp.User;

public interface UserService {
    void save(User user);

    User findByUsername(String username);
}
