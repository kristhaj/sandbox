import { id } from "date-fns/locale";
import {API_ENDPOINT} from "./index.js";

export const addNewBook = async (newTitle, newStart, newEnd) => {
    const response = await fetch(`${API_ENDPOINT}/books`, {
        method: "POST",
        body: JSON.stringify({
            title: newTitle,
            start: newStart,
            end: newEnd
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    const newBook = await response.json();
    return newBook;

};
export const getBooks = async () => {
    const response = await fetch(`${API_ENDPOINT}/books`);
    const books = await response.json();

    return books;
};
export const updateBook = async (id, newTitle, newStart, newEnd) => {
    const response = await fetch(`${API_ENDPOINT}/books/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            newTitle,
            newStart,
            newEnd
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    return response.status;
};
// TODO: Create th1e deleteBook function that takes the id of the book to be deleted as an argument. Inside of the function, create a DELETE request for the specified book to be deleted. Return the status of the response at the end of the function.
export const deleteBook = async (id) => {
    const response = await fetch(`${API_ENDPOINT}/books/${id}`, {
        method: "DELETE"
    });

    return response.status;
}