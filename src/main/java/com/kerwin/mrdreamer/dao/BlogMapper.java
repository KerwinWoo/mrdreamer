package com.kerwin.mrdreamer.dao;

import java.util.List;

import com.kerwin.mrdreamer.model.bo.Blog;
import com.kerwin.mrdreamer.model.vo.CommonRequestParam;

public interface BlogMapper {
    int deleteByPrimaryKey(Long id);

    int insert(Blog record);

    int insertSelective(Blog record);

    Blog selectByPrimaryKey(Long id);
    
    List<Blog> selectByUserId(Long userId); 
    
    List<Blog> selectByFilter(CommonRequestParam param);

    int updateByPrimaryKeySelective(Blog record);

    int updateByPrimaryKeyWithBLOBs(Blog record);

    int updateByPrimaryKey(Blog record);
}