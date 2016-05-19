package com.kerwin.mrdreamer.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class HomePageController {
	
	@RequestMapping("")
	public String initPage(){
		return "/spa";
	}
	
	@RequestMapping("/lib/ueditor/jsp/controller.jsp")
	public String ueditorJspPage(){
		return "/controller";
	}
}
