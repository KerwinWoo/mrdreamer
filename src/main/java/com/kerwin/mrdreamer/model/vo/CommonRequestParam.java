package com.kerwin.mrdreamer.model.vo;

import java.io.Serializable;

public class CommonRequestParam implements Serializable{

	private static final long serialVersionUID = -113385381802448682L;
	
	private String start;//分页开始记录
	private String rows;//分页单页行数
	
	private String userId;//用户ID
	private String type;//博客类型

	public String getStart() {
		return start;
	}

	public void setStart(String start) {
		this.start = start;
	}

	public String getRows() {
		return rows;
	}

	public void setRows(String rows) {
		this.rows = rows;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}
}
