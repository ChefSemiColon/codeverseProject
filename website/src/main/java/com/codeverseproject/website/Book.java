package com.codeverseproject.website;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Book {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
    private String title;
    private String author;
	private Float price;
    private String imageURL;


    public Book(){

    }

    public Book(String title, String author, Float price){
        this.title=title;
        this.author=author;
        this.price=price;
        this.imageURL = "http://books.google.com/books/content?id=9j4JGEkCA5cC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api";
    }

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

    public String getTitle(){
        return title;
    }

    public void setTitle(String title){
        this.title=title;
    }

    public String getAuthor(){
        return author;
    }

    public void setAuthor(String author){
        this.author=author;
    }

    public Float getPrice() {
		return price;
	}

	public void setPrice(Float price) {
		this.price=price;
	}

    public String getImage(){
        return imageURL;
    }

    public void setImage(String imageURL){
        this.imageURL=imageURL;
    }
}
