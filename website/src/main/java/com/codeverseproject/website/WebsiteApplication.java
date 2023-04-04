package com.codeverseproject.website;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;


@SpringBootApplication
public class WebsiteApplication {

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(WebsiteApplication.class, args);
		BookRepository repository = context.getBean(BookRepository.class);
		UserRepository userRepository = context.getBean(UserRepository.class);
		repository.save(new Book("Things Fall Apart", "Chinua Achebe", 9.99f, "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81H+63TZuFL.jpg"));
		repository.save(new Book("Fairy tales", "Hans Christian Andersen", 9.99f, "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781839642272/hans-christian-andersen-fairy-tales-9781839642272_lg.jpg"));
		repository.save(new Book("The Divine Comedy", "Dante Alighieri", 9.99f, "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/910RVMMAJpL.jpg"));
		repository.save(new Book("The Epic Of Gilgamesh", "Unknown", 9.99f, "https://cdn.shopify.com/s/files/1/0534/0027/3064/products/theepicofgilgamesh_580x.jpg?v=1619559611"));
		repository.save(new Book("One Thousand and One Nights", "Unknown", 9.99f, "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51ZgP+R5kNL.jpg"));
		repository.save(new Book("Pride and Prejudice", "Jane Austen", 9.99f,"https://www.gutenberg.org/files/1342/1342-h/images/cover.jpg"));
		repository.save(new Book("Nj\u00e1l's Saga", "Unknown", 9.99f, "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81bwnDjr8TL.jpg"));
		repository.save(new Book("Le P\u00e8re Goriot", "Honor\u00e9 de Balzac", 9.99f,"https://pictures.abebooks.com/isbn/9782877141239-uk.jpg"));
		repository.save(new Book("The Decameron", "Giovanni Boccaccio", 9.99f, "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91rwRXdasRL.jpg"));
		repository.save(new Book("Great Expectations", "Charles Dickens", 9.99f,"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/810zoOnbK8L.jpg"));

		userRepository.save(new SiteUser("username", "password"));
	}

}
 