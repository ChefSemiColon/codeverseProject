package com.codeverseproject.website;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RESTController {
    
    @Autowired
    BookRepository repository;

    @GetMapping("/home")
    public Iterable<Book> getBooks(){
        return repository.findAll();
    }

    @RequestMapping("/add/{title}/{author}/{price}/{image}")
    public String addbook(@PathVariable String title, @PathVariable String author, @PathVariable Float price, @PathVariable String image){
        repository.save(new Book(title, author, price, image));
        return "Book has been added";
    }

    // @RequestMapping("/idsearch/{id}")
    // public Optional<Book> getBookById(@PathVariable Integer id){
    //     return repository.findById(id);
    // }

    @RequestMapping("/iddelete/{id}")
    public String deleteBookById(@PathVariable Integer id){
        repository.deleteById(id);
        return "Book Deleted";
    }

    // @RequestMapping("/titlesearch/{title}")
    // public Iterable<Book> getBookByTitle(@PathVariable String title){
    //     return repository.findByTitle(title);
    // }

    // @RequestMapping("/authorsearch/{author}")
    // public Iterable<Book> getBookByAuthor(@PathVariable String author){
    //     return repository.findByAuthor(author);
    //}


    @RequestMapping("/update/{id}/{title}/{author}/{price}/{image}")
    public String addbook(@PathVariable Integer id, @PathVariable String title, @PathVariable String author, @PathVariable Float price, @PathVariable String image){
		var temp = new Book(title, author, price, image);
		temp.setId(id);
		repository.save(temp);
        return "Book updated";
    }

    @RequestMapping("/search/{searchTerm}")    
    public Iterable<Book> getBooksQuery(@PathVariable String searchTerm){
        System.out.println(repository.findAllQuery(searchTerm));
        return repository.findAllQuery(searchTerm);
    }
}
