package com.codeverseproject.website;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class WebsiteApplication {

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(WebsiteApplication.class, args);
		BookRepository repository = context.getBean(BookRepository.class);
		repository.save(new Book("bookName", "bookAuthor"));
	}

}
