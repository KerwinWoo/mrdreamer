package com.kerwin.mrdreamer.model.vo;

import java.io.Serializable;
import java.util.Map;

/**
 * 基础返回值类
 * @author Kerwin
 *
 */
public class BaseResult implements Serializable{

	private static final long serialVersionUID = -7869359113588792818L;
	
	private String returnCode;
	private String returnMsg;
	private Map<String, Object> data;
	public String getReturnCode() {
		return returnCode;
	}
	public void setReturnCode(String returnCode) {
		this.returnCode = returnCode;
	}
	public String getReturnMsg() {
		return returnMsg;
	}
	public void setReturnMsg(String returnMsg) {
		this.returnMsg = returnMsg;
	}
	public Map<String, Object> getData() {
		return data;
	}
	public void setData(Map<String, Object> data) {
		this.data = data;
	}
}
