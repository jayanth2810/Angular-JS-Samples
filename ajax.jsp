 <%@ page import="java.util.*" %>
 <%@ page import="java.net.*" %>

 <%
			try
        {
			String var = request.getParameter("ip");
            InetAddress address = InetAddress.getByName(var);
			boolean reachable = address.isReachable(50000);
			
			
			if(reachable)
			 out.println("success");
			
			
		
           
        } catch (Exception e)
        {
            out.println("failure");
        }
			
%>

