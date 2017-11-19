package com.hellokoding.auth.cgd;

import com.hellokoding.auth.cdp.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
