/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hoon.rest.webservices.restfulwebservices.helloworld.todo;

import java.util.Date;
import java.util.Objects;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 *
 * @author hoon0
 */
@Entity
public class Todo {
    
    @Id
    @GeneratedValue
    private Long id;
    private String username;
    private String description;
    private Date targetDate;
    private boolean isDone;
    
    protected Todo(){
        
    }

    public Todo(long id, String username, String description, Date targetDate, boolean isDone) {
        this.id = id;
        this.username = username;
        this.description = description;
        this.targetDate = targetDate;
        this.isDone = isDone;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getTargetDate() {
        return targetDate;
    }

    public void setTargetDate(Date targetDate) {
        this.targetDate = targetDate;
    }

    public boolean isIsDone() {
        return isDone;
    }

    public void setIsDone(boolean isDone) {
        this.isDone = isDone;
    }

    @Override
    public int hashCode() {
        int hash = 5;
        hash = 73 * hash + (int) (this.id ^ (this.id >>> 32));
        hash = 73 * hash + Objects.hashCode(this.username);
        hash = 73 * hash + Objects.hashCode(this.description);
        hash = 73 * hash + Objects.hashCode(this.targetDate);
        hash = 73 * hash + (this.isDone ? 1 : 0);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Todo other = (Todo) obj;
        if (this.id != other.id) {
            return false;
        }
        if (this.isDone != other.isDone) {
            return false;
        }
        if (!Objects.equals(this.username, other.username)) {
            return false;
        }
        if (!Objects.equals(this.description, other.description)) {
            return false;
        }
        if (!Objects.equals(this.targetDate, other.targetDate)) {
            return false;
        }
        return true;
    }
    
    
}
