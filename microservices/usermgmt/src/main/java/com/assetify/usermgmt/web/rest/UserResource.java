package com.assetify.usermgmt.web.rest;

import com.assetify.datamgmt.domain.User;
import com.assetify.usermgmt.config.DefaultProfileUtil;
import io.github.jhipster.config.JHipsterProperties;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Resource to return information about the currently running Spring profiles.
 */
@RestController
@RequestMapping("/api")
public class UserResource {

    private final Environment env;

    private final JHipsterProperties jHipsterProperties;

    public UserResource(Environment env, JHipsterProperties jHipsterProperties) {
        this.env = env;
        this.jHipsterProperties = jHipsterProperties;
    }

    @GetMapping("/user")
    public List<User> getAllUsers() {
        System.out.println("Called to get all users");
        User user = new User();
        user.setFirstName("FN");
        user.setLastName("LN");
        List<User> users = new ArrayList<>();
        users.add(user);
        return users;
    }
    @PostMapping("/user")
    public User create(@RequestBody User user) {
        System.out.println("Called to create User " + user);
        return user;
    }
}
