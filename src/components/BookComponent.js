import React from 'react'
import bookService from '../services/BookService'
import MUIDataTable from "mui-datatables";

class BookComponent extends React.Component{

  // Set constructor and a state attribute called 'books' that is and empty array
  constructor(props){
      super(props);
      this.state = { books: []};
  }

  // When component mounted, do a call to the bookService to retrieve the data and put the 
  // response data in the state attribute called 'books'.
  componentDidMount(){
    bookService.getBooks().then((Response)=>{
      this.setState({books: Response.data})
      // For demo purposes: Below creates a map called 'bookData' based upon the content from the map 'books' that is pulled 
      // from the state.
        const bookData = this.state.books.map((book) => {
        // define the keys to be in the map and connect them to values pulled from book.
        return {
          "id": book.id,
          "bookName": book.bookName,
          "authorName": book.authorName,
          "price": book.price,
        };
      });
      console.log(bookData);
      // Add the newly created map called bookData to a state attribute called 'bookies'
      this.setState({
        bookies: bookData
      });
    }).catch((error) => console.log(error));
  }


  render(){
    // Define custom columns so we can have column names that are different than the keys that are in the map we want to display
    const custom_columns = [
      {
        name: "id",
        label: "ID",
        options: {
          sort: true,
          filter: false
        }
      },
      {
        name: "authorName",
        label: "Author Name",
        options: {
          sort: false,
          filter: true
        }
      },
      {
        name: "bookName",
        label: "Book Name",
        options: {
          sort: true,
          filter: true
        }
      },
      {
        name: "price",
        label: "Price",
          options: {
            sort: false,
            filter: false
          }
      }
    ]

    // Set options for the MUIDatatable
    const options = {
      download: false,
      print: false,
      selectableRows: 'single'
    };

    return(
      <div>
        <p>See below for a MUI Datatable</p>
        <MUIDataTable
          title={"Book list"}
          data={this.state.books}
          columns={custom_columns}
          options={options}
        />
        <p>See below for a traditional table on the same data as above</p>
        <h1>List of Books</h1>
        <table className="table table-bordered border-info">
          <thead>
            <tr>
            <th>Id</th>
            <th>Book Name</th>
            <th>Book Author</th>
            <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.books.map(books =>
                <tr key = {books.id}>
                  <td>{books.id}</td>
                  <td>{books.bookName}</td>
                  <td>{books.authorName}</td>
                  <td>{books.price}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}
export default BookComponent