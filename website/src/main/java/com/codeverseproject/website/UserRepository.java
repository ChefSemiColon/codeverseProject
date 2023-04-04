package com.codeverseproject.website;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends CrudRepository<SiteUser, Long> {
    
    @Query(value = "SELECT * " + 
    "FROM site_user " + 
    "WHERE username = ?1 " +
    "AND password = ?2 ", 
     nativeQuery = true)
    SiteUser findUser(String searchTerm1, String searchTerm2);

}
