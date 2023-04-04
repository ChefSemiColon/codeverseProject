package com.codeverseproject.website;

import jakarta.persistence.*;

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

    public Book(String title, String author, Float price, String imageURL){
        this.title=title;
        this.author=author;
        this.price=price;
        this.imageURL = imageURL;
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
