package com.sample.modules;

import org.springframework.stereotype.Component;

@Component
public class ModuleCImpl implements ModuleC {
    @Override
    public void invoke() {
        System.out.println("Invoked in MoculeCImpl");
    }
}
