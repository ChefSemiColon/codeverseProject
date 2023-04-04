package com.codeverseproject.website;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


@RestController
public class RESTController {
    
    @Autowired
    BookRepository repository;

    @Autowired
    UserRepository userRepository;

    @GetMapping("/allbooks")
    public Iterable<Book> getBooks(){
        return repository.findAll();
    }

    @RequestMapping("/add/{title}/{author}/{price}/{image}")
    public String addbook(@PathVariable String title, @PathVariable String author, @PathVariable Float price, @PathVariable String image){
        repository.save(new Book(title, author, price, image));
        return "Book has been added";
    }

    @RequestMapping("/iddelete/{id}")
    public String deleteBookById(@PathVariable Integer id){
        repository.deleteById(id);
        return "Book Deleted";
    }

    @RequestMapping("/update/{id}/{title}/{author}/{price}/{image}")
    public String addbook(@PathVariable Integer id, @PathVariable String title, @PathVariable String author, @PathVariable Float price, @PathVariable String image){
		var temp = new Book(title, author, price, image);
		temp.setId(id);
		repository.save(temp);
        return "Book updated";
    }

    @GetMapping("/books")
    @ResponseBody    
    public Iterable<Book> getBooksQuery(@RequestParam  String q){
        return repository.findAllQuery(q);
    }

    @GetMapping("/login/{username}/{password}")
    @ResponseBody
    public Boolean verifyUser(@PathVariable String username, @PathVariable String password){
        var temp2 = userRepository.findUser(username,password);
        System.out.println(password);
        return temp2 == null ? false : true;
    }
}
