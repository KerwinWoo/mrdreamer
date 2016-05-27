package com.kerwin.mrdreamer.service;

import java.util.List;

import com.kerwin.mrdreamer.model.bo.Blog;
import com.kerwin.mrdreamer.model.bo.BlogComment;
import com.kerwin.mrdreamer.model.vo.CommonRequestParam;

public interface IBlogService {

	public List<Blog> getAllBlogs();
	
	public List<Blog> getAllBlogsOfUser(String userId);
	
	public Blog getBlogById(String blogId);
	
	/**
	 * 根据过滤条件获取博客信息
	 * @param param {type:博客类型start:分页开始记录row:分页单页行数userId:博客作者id}
	 * @return 博客列表
	 */
	public List<Blog> getBlogsByFilter(CommonRequestParam param);
	
	/**
	 * 根据博客id获取博客详情
	 * @param blogId 博客id
	 * @return 博客列表
	 */
	public Blog getBlogDetailInfo(String blogId);
	
	
	/**
	 * 插入一條博客信息
	 * @param blog
	 * @return
	 */
	public int addBlog(Blog blog);
	
	/**
	 * 查询某个博客下面的评论信息
	 * @param blogId 博客Id
	 * @return
	 */
	public List<BlogComment> getBlogComments(String blogId);
	
	/**
	 * 插入一条博客评论信息
	 * @param comment
	 * @return
	 */
	public int addBlogComment(BlogComment comment);
	
	/**
	 * 更新点赞人数
	 * @param blog
	 * @return
	 */
	public int updateFavouriteNum(Blog blog);
	
	/**
	 * 更新博客信息
	 * @param blog
	 * @return
	 */
	public int updateBlogInfo(Blog blog);
	
	/**
	 * 删除博客
	 * @param blogId
	 * @return
	 */
	public int deleteBlog(String blogId);
}
