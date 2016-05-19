package com.kerwin.mrdreamer.dao;

import java.util.List;

import com.kerwin.mrdreamer.model.bo.BlogComment;

public interface BlogCommentMapper {
    int deleteByPrimaryKey(Long id);

    int insert(BlogComment record);

    int insertSelective(BlogComment record);

    BlogComment selectByPrimaryKey(Long id);
    
    List<BlogComment> selectByBlogId(Long blogId);

    int updateByPrimaryKeySelective(BlogComment record);

    int updateByPrimaryKeyWithBLOBs(BlogComment record);

    int updateByPrimaryKey(BlogComment record);
}