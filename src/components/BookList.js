import React, { Component } from 'react'
import Book from "./Book";
const bookData = window.Seed;
export default class BookList extends Component {
    state = {
        books: [],
    };
    componentDidMount() {
        this.setState({ books: bookData.books });
    };
    handleBookUpVote = (bookId) => {
        const nextBooks = this.state.books.map((book) => {
            if (book.id === bookId) {
            return Object.assign({}, book, {
                upVotes: book.upVotes + 1,
            });
            } else {
            return book;
            }
        });
        this.setState({
            books: nextBooks,
        });
    };
    handleBookDownVote = (bookId) => {
        const nextBooks = this.state.books.map((book) => {
            if (book.id === bookId) {
            return Object.assign({}, book, {
                downVotes: book.downVotes + 1,
            });
            } else {
            return book;
            }
        });
        this.setState({
            books: nextBooks,
        });
    };
    render() {
         const sortedBooks = this.state.books.sort((a, b) => (
            b.upVotes - a.upVotes
            ));
         const bookComponents = sortedBooks.map((book) => (
            <Book 
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                link={book.link}
                upVotes={book.upVotes}
                downVotes={book.downVotes}
                language={book.language}
                pages={book.pages}
                year={book.year}
                country={book.country}
                imageLink={"../" + book.imageLink}
                onUpVote={this.handleBookUpVote}
                onDownVote={this.handleBookDownVote}
            />
         ))
         return (
            <div className='ui unstackable items'>
                 {bookComponents}
            </div>
        )
    }
}
