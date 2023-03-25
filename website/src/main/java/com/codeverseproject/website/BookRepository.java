package com.codeverseproject.website;

import org.springframework.data.repository.CrudRepository;

public interface BookRepository extends CrudRepository<Book, Integer> {
    Iterable<Book> findByTitle(String text);
    Iterable<Book> findByAuthor(String text);
}