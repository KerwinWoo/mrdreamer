package com.kerwin.mrdreamer;

public class Test {

	public static void main(String[] args) {
		TestObj t = new TestObj();
		t.setName("mooon");
		method(t);
		System.out.println(t.getName());
	}
	
	public static void method(TestObj obj){
		obj.setName("kerwin");
		obj = new TestObj();
		obj.setName("andy");
	}
}
