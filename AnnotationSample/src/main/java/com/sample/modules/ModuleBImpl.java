package com.sample.modules;

import com.sample.framework.Dependency;
import com.sample.framework.InjectDependency;

@Dependency
public class ModuleBImpl implements ModuleB {
    @InjectDependency
    private ModuleC moduleC;
    @Override
    public void invokeMethod() {
        System.out.println("ModuleBImpl Method Called");
        moduleC.invoke();
    }
}
