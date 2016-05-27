package com.kerwin.mrdreamer.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.kerwin.mrdreamer.model.bo.Blog;
import com.kerwin.mrdreamer.service.IBlogService;

/**
 * @description 系统管理
 * @author Kerwin
 * @created on 2016年5月17日
 */
@RequestMapping("/sys")
@Controller
public class SysManagementController {
	
	@Autowired
	private IBlogService blogService;
	
	@RequestMapping("/blog/init")
	public String writeBlogPage(){
		return "/sys/blogList";
	}
	
	@RequestMapping("/blog/query")
	public @ResponseBody List<Blog> blogManagementList(){
		return blogService.getAllBlogs();
	}
	
	@RequestMapping("/blog/page/add")
	public String page(){
		return "/sys/addBlog";
	}
	
	@RequestMapping("/blog/{blogId}/edit")
	public String writeBlogPage(@PathVariable("blogId") String blogId, Model m){
		m.addAttribute("blogId", blogId);
		m.addAttribute("mode","edit");
		return "/sys/addBlog";
	}

	@RequestMapping("/blog/{operType}")
	public @ResponseBody String writeBlogPage(@PathVariable("operType") String operType, @RequestBody Blog blog){
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		if("add".equalsIgnoreCase(operType)){
			blog.setCreatedate(sdf.format(new Date()));
			blog.setUserid(1l);
			blogService.addBlog(blog);
			return "success";
		}
		else if("edit".equals(operType)){
			blog.setUpdatedate(sdf.format(new Date()));
			blogService.updateBlogInfo(blog);
			return "success";
		}
		else if("delete".equals(operType)){
			blogService.deleteBlog(blog.getId()+"");
		}
		return "failure";
	}
}
