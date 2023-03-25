package com.codeverseproject.website;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RESTController {
    
    @Autowired
    BookRepository repository;

    @GetMapping("/Home")
    public Iterable<Book> getBooks(){
        return repository.findAll();
    }

    @GetMapping("/hello")
    public String getHello(){
        return "Hello!";
    }

    @RequestMapping("/add/{title}/{author}")
    public String addbook(@PathVariable String title, @PathVariable String author){
        repository.save(new Book(title, author));
        return "Book has been added";
    }

    @RequestMapping("/idsearch/{id}")
    public Optional<Book> getBookById(@PathVariable Integer id){
        return repository.findById(id);
    }

    @RequestMapping("/iddelete/{id}")
    public String deleteBookById(@PathVariable Integer id){
        repository.deleteById(id);
        return "Book Deleted";
    }

    @RequestMapping("/titlesearch/{title}")
    public Iterable<Book> getBookByTitle(@PathVariable String title){
        return repository.findByTitle(title);
    }

    @RequestMapping("/authorsearch/{author}")
    public Iterable<Book> getBookByAuthor(@PathVariable String author){
        return repository.findByAuthor(author);
    }
}
