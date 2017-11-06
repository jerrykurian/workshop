package com.sample.aspects;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LazyLoader {
    @Pointcut("execution(* com.sample.modules..*(..))")
    public void lazyPreChecker(){}//pointcut name

    @Pointcut("execution(* com.sample.modules.ModuleA.*(..))")
    public void lazyPostChecker(){}//pointcut name

    @Before("lazyPreChecker()")//applying pointcut on before advice
    public void preLoader(JoinPoint jp){
        System.out.println("Called the jp - Before");
    }

    @After("lazyPostChecker()")//applying pointcut on before advice
    public void postLoader(JoinPoint jp){
        System.out.println("Called the jp - After");
    }
}
