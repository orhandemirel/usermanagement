package com.orhandemirel;

import javax.ws.rs.GET;  
import javax.ws.rs.Path;  
import javax.ws.rs.Produces;  
import javax.ws.rs.core.MediaType;
import java.util.*;
 
@Path("/users")
public class UserService {
	
	static List<User> users;
	
	static
	{
		users = new ArrayList<User>();
		
		User u = new User();
		u.fname = "Selcuk";
		u.lname = "Demirel";
		u.phone = "123-456-7890";
		users.add(u);
	}
	 @GET  
	    @Produces(MediaType.APPLICATION_JSON)  
	    public List<User> sayHello()  
	    {  
	        return users;
	    }  
}
