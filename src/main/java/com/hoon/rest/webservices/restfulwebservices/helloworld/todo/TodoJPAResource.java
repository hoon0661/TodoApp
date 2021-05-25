/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hoon.rest.webservices.restfulwebservices.helloworld.todo;

import com.hoon.rest.webservices.restfulwebservices.helloworld.todo.Todo;
import com.hoon.rest.webservices.restfulwebservices.helloworld.todo.TodoHardcodedService;
import java.net.URI;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

/**
 *
 * @author hoon0
 */
@RestController
//This CrossOrigin is needed for CORS errors
@CrossOrigin(origins="http://localhost:4200")
public class TodoJPAResource {
    
    @Autowired
    private TodoJpaRepository todoJpaRepository;
    
    @Autowired
    private TodoHardcodedService todoService;
    
    @GetMapping("/jpa/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username){
        return todoJpaRepository.findByUsername(username);
    }
    
    @GetMapping("/jpa/users/{username}/todos/{id}")
    public Todo getTodo(@PathVariable String username, @PathVariable long id){
        return todoJpaRepository.findById(id).get();
    }
    
    @PutMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo){
        todo.setUsername(username);
        Todo todoUpdated = todoJpaRepository.save(todo);
        return new ResponseEntity<Todo>(todo, HttpStatus.OK);
    }
    
    @PostMapping("/jpa/users/{username}/todos")
    public ResponseEntity<Todo> createTodo(@PathVariable String username, @RequestBody Todo todo){
        todo.setUsername(username);
        Todo createdTodo = todoJpaRepository.save(todo);
        
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }
    
    
    
    
    
    //ResponseEntity returns specific status
    @DeleteMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id){
        todoJpaRepository.deleteById(id);

        
        return ResponseEntity.noContent().build();
    }
}
