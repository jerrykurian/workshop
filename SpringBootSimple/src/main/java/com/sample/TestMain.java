package com.sample;

import com.sample.modules.ModuleA;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class TestMain {
    public static void main(String[] args){
        SpringApplication.run(TestMain.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
        return args -> {
            ModuleA a = (ModuleA) ctx.getBean(ModuleA.class);
            a.invoke();
        };
    }
}
