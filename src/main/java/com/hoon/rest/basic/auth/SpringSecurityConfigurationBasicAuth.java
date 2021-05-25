/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hoon.rest.basic.auth;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 *
 * @author hoon0
 */
@Configuration
@EnableWebSecurity
public class SpringSecurityConfigurationBasicAuth extends WebSecurityConfigurerAdapter{
    @Override
    protected void configure(HttpSecurity http) throws Exception{
        http
                .csrf().disable()//put and post need csrf
                .authorizeRequests()
                .antMatchers(HttpMethod.OPTIONS, "/**").permitAll()///** means any url, and this line of code is to permit any url with options request(for preflight without authentication)
                .anyRequest().authenticated().and()
//                .formLogin().and()
                .httpBasic();
    }
}
