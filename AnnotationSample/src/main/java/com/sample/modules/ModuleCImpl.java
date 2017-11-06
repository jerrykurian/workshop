package com.sample.modules;

import com.sample.framework.Dependency;

@Dependency
public class ModuleCImpl implements ModuleC {
    @Override
    public void invoke() {
        System.out.println("Invoked in MoculeCImpl");
    }
}
