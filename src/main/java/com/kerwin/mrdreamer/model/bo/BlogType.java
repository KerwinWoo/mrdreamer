package com.kerwin.mrdreamer.model.bo;

import java.util.ArrayList;
import java.util.List;

public class BlogType {

	private String name;
	private String activeBgColor;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getActiveBgColor() {
		return activeBgColor;
	}
	public void setActiveBgColor(String activeBgColor) {
		this.activeBgColor = activeBgColor;
	}
	
	public static List<BlogType> getAllBlogTypes(){
		List<BlogType> lst = new ArrayList<BlogType>();
		BlogType b = new BlogType();
		b.setActiveBgColor("tec");
		b.setName("技术");
		lst.add(b);
		b = new BlogType();
		b.setActiveBgColor("life");
		b.setName("生活");
		lst.add(b);
		b = new BlogType();
		b.setActiveBgColor("ent");
		b.setName("娱乐");
		lst.add(b);
		b = new BlogType();
		b.setActiveBgColor("job");
		b.setName("工作");
		lst.add(b);
		return lst;
	}
}
