package com.kerwin.mrdreamer.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kerwin.mrdreamer.dao.BlogCommentMapper;
import com.kerwin.mrdreamer.dao.BlogMapper;
import com.kerwin.mrdreamer.model.bo.Blog;
import com.kerwin.mrdreamer.model.bo.BlogComment;
import com.kerwin.mrdreamer.model.vo.CommonRequestParam;
import com.kerwin.mrdreamer.service.IBlogService;

@Service("blogService")
public class BlogServiceImpl implements IBlogService{
	
	@Autowired
	private BlogMapper blogMapper;
	
	@Autowired
	private BlogCommentMapper blogCommentMapper;

	@Override
	public List<Blog> getAllBlogsOfUser(String userId) {
		return blogMapper.selectByUserId(Long.parseLong(userId));
	}

	@Override
	public Blog getBlogById(String blogId) {
		return blogMapper.selectByPrimaryKey(Long.parseLong(blogId));
	}

	@Override
	public List<Blog> getBlogsByFilter(CommonRequestParam param) {
		return blogMapper.selectByFilter(param);
	}

	@Override
	public Blog getBlogDetailInfo(String blogId) {
		return blogMapper.selectByPrimaryKey(Long.parseLong(blogId));
	}

	@Override
	public int addBlog(Blog blog) {
		return blogMapper.insert(blog);
	}

	@Override
	public List<BlogComment> getBlogComments(String blogId) {
		return blogCommentMapper.selectByBlogId(Long.parseLong(blogId));
	}

	@Override
	public int addBlogComment(BlogComment comment) {
		return blogCommentMapper.insert(comment);
	}

	@Override
	public int updateFavouriteNum(Blog blog) {
		return blogMapper.updateByPrimaryKeySelective(blog);
	}

	@Override
	public int updateBlogInfo(Blog blog) {
		return blogMapper.updateByPrimaryKeySelective(blog);
	}

	@Override
	public List<Blog> getAllBlogs() {
		return blogMapper.selectAll();
	}

	@Override
	public int deleteBlog(String blogId) {
		return blogMapper.deleteByPrimaryKey(Long.parseLong(blogId));
	}
}
