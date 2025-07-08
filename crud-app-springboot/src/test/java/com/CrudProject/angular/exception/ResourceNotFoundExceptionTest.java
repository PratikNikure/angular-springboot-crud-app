package com.CrudProject.angular.exception;

import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import static org.junit.jupiter.api.Assertions.*;

class ResourceNotFoundExceptionTest {

    @Test
    void testResourceNotFoundExceptionBehavior() {
        // Arrange
        String expectedMessage = "Resource not found";

        // Act
        ResourceNotFoundException exception = new ResourceNotFoundException(expectedMessage);

        // Assert
        assertTrue(exception instanceof RuntimeException, "Should be a subclass of RuntimeException");
        assertEquals(expectedMessage, exception.getMessage(), "Exception message should match");

        // Check annotation
        ResponseStatus annotation = exception.getClass().getAnnotation(ResponseStatus.class);
        assertNotNull(annotation, "ResponseStatus annotation should be present");
        assertEquals(HttpStatus.NOT_FOUND, annotation.value(), "HTTP status should be 404 NOT_FOUND");
}
}