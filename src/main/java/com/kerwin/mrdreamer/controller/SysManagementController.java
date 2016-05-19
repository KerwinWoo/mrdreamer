package com.kerwin.mrdreamer.controller;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
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
	
	@RequestMapping("/blog")
	public String writeBlogPage(){
		return "/sys/blogMgr";
	}

	@RequestMapping("/addBlog")
	public @ResponseBody String writeBlogPage(@RequestBody Blog blog){
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		blog.setCreatedate(sdf.format(new Date()));
		blog.setUserid(1l);
		blogService.addBlog(blog);
		return "success";
	}
}
