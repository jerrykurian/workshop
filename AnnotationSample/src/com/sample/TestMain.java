package com.sample;

import com.sample.framework.ComponentFactory;
import com.sample.modules.ModuleA;

public class TestMain {
    public static void main(String[] args){
        try {
            ModuleA a  = (ModuleA) ComponentFactory.getInstance("com.sample.modules.ModuleA");
            a.invoke();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InstantiationException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
