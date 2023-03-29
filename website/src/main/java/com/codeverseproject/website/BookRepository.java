package com.codeverseproject.website;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface BookRepository extends CrudRepository<Book, Integer> {
    Iterable<Book> findByTitle(String text);
    Iterable<Book> findByAuthor(String text);

    @Query(value = "SELECT * " + 
                   "FROM book " + 
                   "WHERE title LIKE %?1% " +
                   "OR author LIKE %?1% ", 
                    nativeQuery = true)
    Iterable<Book> findAllQuery(String searchTerm);
}