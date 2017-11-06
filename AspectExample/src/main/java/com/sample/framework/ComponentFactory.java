package com.sample.framework;

import java.lang.reflect.Field;
import java.util.Set;

import org.reflections.Reflections;

public class ComponentFactory {

	private static Reflections reflections = new Reflections("com.sample");
	public static Object getInstance(String className) throws InstantiationException, IllegalAccessException, ClassNotFoundException {
		Class klass = Class.forName(className);
		Object returnObject = klass.newInstance();
		return injectDependency(returnObject);
	}
	private static Object injectDependency(Object object) throws IllegalArgumentException,
			IllegalAccessException,
			InstantiationException{
		// Initialize the reflections library
		// For the given object, find out all the declaring fields/properties
		Field[] fields = object.getClass().getDeclaredFields();
		// Loop through each field to find out the one that has annotation
		for(int i=0; i<fields.length; i++){
			Field currentField = fields[i];
			// Find the field that needs injection
			if(fieldWantsInjection(currentField)){
				Class fieldType = currentField.getType();
				// Find all the classes that implement this type
				Set<Class> implementationClass = reflections.getSubTypesOf(fieldType);
				// Find the actual implementation that will act as @Dependency
				Class implementationToUse = 
						findImplementationToUse(implementationClass);
				// Create an instance of the @Dependency class and set it to 
				// the field
				Object dependency = implementationToUse.newInstance();
				// Set the dependency of the dependent module
				injectDependency(dependency);
				currentField.setAccessible(true);
				currentField.set(object, dependency);
			}
		}
		return object;
	}

	private static Class findImplementationToUse(Set<Class> implementationClass) {
		// TODO Auto-generated method stub
		for(Class implClass:implementationClass){
			// Loop through and find a class that has annotation @Dependency
			if(implClass.getAnnotation(Dependency.class)!=null){
				// If annotation exists, then return the class
				return implClass;
			}
		}
		return null;
	}

	private static boolean fieldWantsInjection(Field field) {
		// TODO Auto-generated method stub
		// Field will need injection if it is annotated with @InjectDependency
		if(field.getDeclaredAnnotation(InjectDependency.class) 
				!= null){
			// If this field has the annotation, return true
			return true;
		}else{
			return false;
		}
	}
}
