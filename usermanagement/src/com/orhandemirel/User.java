package com.orhandemirel;

public class User {
	private int id;
	private String fname;
	private String lname;
	private String phone;
	
	public User(){}
	public User(String fname, String lname, String phone)
	{
		this.setFname(fname);
		this.setLname(lname);
		this.setPhone(phone);
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
}
