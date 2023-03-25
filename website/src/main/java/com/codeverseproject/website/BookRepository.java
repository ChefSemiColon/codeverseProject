package com.codeverseproject.website;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

public interface BookRepository extends CrudRepository<Book, Integer> {
    Optional<Book> findByTitle(String text);
}