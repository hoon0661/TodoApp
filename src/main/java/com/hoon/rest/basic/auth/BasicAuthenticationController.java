package com.hoon.rest.basic.auth;



import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
//If want to use another server, CrossOrigin can be used
//it can be used for multiple ports too. 
@CrossOrigin(origins="http://localhost:4200")
public class BasicAuthenticationController {
	
	@GetMapping(path = "/basicauth")
	public AuthenticationBean helloWorldBean() {
            //throw new RuntimeException("Some Error has Happened! Contact Support at ***-***");
		return new AuthenticationBean("You are authenticated");
	}
	
}
	 