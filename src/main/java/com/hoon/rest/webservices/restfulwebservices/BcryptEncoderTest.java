/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hoon.rest.webservices.restfulwebservices;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

/**
 *
 * @author hoon0
 */
public class BcryptEncoderTest {
    public static void main(String[] args){
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        for(int i = 1; i <=10; i++){
        
            String encodedString = encoder.encode("password@!23@#!");
            System.out.println(encodedString);
        }
    }
}
