package com.kerwin.mrdreamer.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.kerwin.mrdreamer.model.bo.Blog;
import com.kerwin.mrdreamer.model.bo.BlogComment;
import com.kerwin.mrdreamer.model.bo.BlogType;
import com.kerwin.mrdreamer.model.vo.BaseResult;
import com.kerwin.mrdreamer.model.vo.CommonRequestParam;
import com.kerwin.mrdreamer.service.IBlogService;
import com.kerwin.mrdreamer.util.ConstantUtil;

@Controller
@RequestMapping("/blog")
public class BlogController {
	
	@Autowired
	private IBlogService blogService;
	
	private SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	
	@RequestMapping(value = "/getAllBlogTypes", method = RequestMethod.POST)
	public @ResponseBody List<BlogType> getAllBlogTypes(){
		return BlogType.getAllBlogTypes();
	}

	@RequestMapping(value = "/overview/{type}", method = RequestMethod.POST)
	public @ResponseBody BaseResult getBlogData(@PathVariable("type") String type, @RequestBody CommonRequestParam param, HttpServletRequest request, HttpServletResponse response){
		BaseResult result = new BaseResult();
		Map<String, Object> data = new HashMap<String, Object>();
		param.setType(type);
		param.setUserId("1");
		List<Blog> blogs = blogService.getBlogsByFilter(param);
		data.put("blogs", blogs);
		result.setReturnCode(ConstantUtil.RESULT_CODE_SUCCESS);
		result.setReturnMsg("successful");
		result.setData(data);
		response.setHeader("Cache-Control", "max-age=3000");
		return result;
	}
	
	@RequestMapping(value = "/detail/{blogId}", method = RequestMethod.POST)
	public @ResponseBody BaseResult getBlogDetail(@PathVariable("blogId") String blogId){
		BaseResult result = new BaseResult();
		Map<String, Object> data = new HashMap<String, Object>();
		Blog blog = blogService.getBlogDetailInfo(blogId);
		data.put("blog", blog);
		result.setReturnCode(ConstantUtil.RESULT_CODE_SUCCESS);
		result.setReturnMsg("successful");
		result.setData(data);
		return result;
	}
	
	@RequestMapping(value = "/fav", method = RequestMethod.POST)
	public @ResponseBody BaseResult setFavourite(@RequestBody Blog blog){
		BaseResult result = new BaseResult();
		blogService.updateFavouriteNum(blog);
		result.setReturnCode(ConstantUtil.RESULT_CODE_SUCCESS);
		result.setReturnMsg("successful");
		return result;
	}
	
	@RequestMapping(value = "/comments/{blogId}", method = RequestMethod.POST)
	public @ResponseBody BaseResult getBlogComments(@PathVariable("blogId") String blogId){
		BaseResult result = new BaseResult();
		Map<String, Object> data = new HashMap<String, Object>();
		List<BlogComment> blogComments = blogService.getBlogComments(blogId);
		data.put("blogComments", blogComments);
		result.setReturnCode(ConstantUtil.RESULT_CODE_SUCCESS);
		result.setReturnMsg("successful");
		result.setData(data);
		return result;
	}
	
	@RequestMapping(value = "/comments/add", method = RequestMethod.POST)
	public @ResponseBody BaseResult addBlogComments(@RequestBody BlogComment comment){
		BaseResult result = new BaseResult();
		Map<String, Object> data = new HashMap<String, Object>();
		comment.setCreateddate(sdf.format(new Date()));
		blogService.addBlogComment(comment);
		result.setReturnCode(ConstantUtil.RESULT_CODE_SUCCESS);
		result.setReturnMsg("successful");
		result.setData(data);
		return result;
	}
}
