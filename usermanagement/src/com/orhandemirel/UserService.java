package com.orhandemirel;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;  
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;  
import javax.ws.rs.Produces;  
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.PathParam;

import java.util.*;
 
@Path("/users")
public class UserService {
	
	static List<User> users;
	static int count;
	
	static
	{
		count = 1;
		users = new ArrayList<User>();
		
		User u = new User();
		u.setId(count);
		u.setFname("Selcuk");
		u.setLname("Demirel");
		u.setPhone("123-456-7890");
		users.add(u);		
	}
	    @GET  
	    @Produces(MediaType.APPLICATION_JSON)  
	    public List<User> getUsers()  
	    {  
	        return users;
	    }
	    
	    @GET  
	    @Path("/{id}")
	    @Produces(MediaType.APPLICATION_JSON)  
	    public User getUser(@PathParam("id") int id)  
	    {  
	        for(User u : users)
	        {
	        	if(u.getId() == id)
	        	{
	        		return u;
	        	}
	        }
	        
	        return null;
	    }
	    
	    @POST
	    @Consumes(MediaType.APPLICATION_JSON)  
	    public Response createUser(User u)  
	    { 
	    	count++;
	    	u.setId(count);
	    	users.add(u);
	        return Response.status(201).build();
	    }
	    
	    @PUT
	    @Consumes(MediaType.APPLICATION_JSON)  
	    public Response updateUser(User u)
	    { 
	    	for(User user : users)
	        {
	        	if(user.getId() == u.getId())
	        	{
	        		user.setFname(u.getFname());
	        		user.setLname(u.getLname());
	        		user.setPhone(u.getPhone());
	        		return Response.status(200).build();
	        	}
	        }
	        return Response.status(404).build();
	    }
	    
	    @DELETE  
	    @Path("/{id}")
	    @Consumes(MediaType.APPLICATION_JSON)  
	    public Response removeUser(@PathParam("id") int id) 
	    {
	    	for(User u : users)
	        {
	        	if(u.getId() == id)
	        	{
	        		users.remove(u);
	        		return Response.status(200).build();
	        	}
	        }
	    	return Response.status(404).build();
	    }
	    
}
