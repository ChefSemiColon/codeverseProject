package com.codeverseproject.website;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RESTController {
    
    
    @Autowired
    BookRepository repository;

    @GetMapping("/home")
    public Iterable<Book> getBooks(){
        return repository.findAll();
    }

}
