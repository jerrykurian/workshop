package com.sample.modules;

import com.sample.framework.InjectDependency;

public class ModuleA {
    @InjectDependency
    private ModuleB moduleB;

    public void invoke(){
        System.out.println("Called Module A");
        moduleB.invokeMethod();
    }
}
