package com.codeverseproject.website;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RESTController {
    
    @Autowired
    private final BookRepository repository;
    
    public RESTController(BookRepository repository){
        this.repository = repository;
    }

    @GetMapping("/home")
    public Iterable<Book> getBooks(){
        return repository.findAll();
    }

    @GetMapping("/hello")
    public String getHello(){
        return "Hello!";
    }

}
