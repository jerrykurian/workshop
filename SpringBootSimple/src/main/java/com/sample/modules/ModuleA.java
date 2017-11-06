package com.sample.modules;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ModuleA {
    @Autowired
    private ModuleB moduleB;

    public void invoke(){
        System.out.println("Called Module A");
        moduleB.invokeMethod();
    }
}
