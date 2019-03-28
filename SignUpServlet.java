package com.practice;
import javax.servlet.http.*;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.*;
import javax.servlet.annotation.WebServlet;




public class SignUpServlet extends HttpServlet{
	
	 public void doGet(HttpServletRequest request,
	            HttpServletResponse response) throws ServletException, IOException {
	 
	       String username = request.getParameter("username");
	       PrintWriter writer = response.getWriter();
	       
	       String htmlResponse="<html>";
	       htmlResponse+="<h2>Your username is "+username+"</h2>";
	       htmlResponse+="</html>";
	       
	       writer.println(htmlResponse);
	 
	    }

}
