package com.sample.modules;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ModuleBImpl implements ModuleB {
    @Autowired
    private ModuleC moduleC;

    @Override
    public void invokeMethod() {
        System.out.println("ModuleBImpl Method Called");
        moduleC.invoke();
    }
}
