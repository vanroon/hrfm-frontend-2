import axios from 'axios';

// To be able to call the backend, make sure spring is configured to the correct frontend
const BOOK_REST_API_URL = 'http://localhost:8888/books'

class BookService{
    getBooks(){
        return axios.get(BOOK_REST_API_URL);
    }
}
export default new BookService();