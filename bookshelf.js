class Library {
  constructor (books, readers) {
    this._books = books
    this._readers = readers
  }


  get books () {
    return this._books;
  }

  get readers () {
    return this._readers;
  }

  doHaveBook(requestedBook){
    return this.books.includes(requestedBook)
  }

  addBook(newBook){
    const index = this.books.findIndex(el => el === newBook)
    if(index  > 0 ){
      this._books[index].quantity ++
    }else{
      this._books.push(newBook)
    }
  }

  addBooks(newBooks){
    for(let book of newBooks){
      const index = this.books.findIndex(el => el === book)
      if(index  > 0 ){
        this._books[index].quantity ++
      }else{
        this._books.push(book)
      }
    }

    return this.books
  }

  checkReaderId(readerId){
    return this.readers.findIndex( reader => reader._readerId === readerId ) > 0
  }

  lendBook(book, readerId){
    const findedBook = this.books.find(book => book === book)
    return (findedBook && this.readers.findIndex(reader => reader._readerId === readerId)) ? findedBook : false
  }



}


class Reader {
  constructor ( firstName, lastName, readerId, booksArray ) {
    this._firstName = firstName
    this._lastName = lastName
    this._readerId = readerId
    this._books = booksArray;
  }

  get firstName () {
    return this._firstName;
  }

  set firstName ( newFirstName ) {
    if ( typeof newFirstName === 'string' ) {
      this._firstName = newFirstName
    }

  }

  get lastName () {
    return this._lastName;
  }

  set lastName ( newLastName ) {
    if(typeof newLastName === 'string') {
      this.lastName = newLastName;
    }
  }

  get readerId () {
    return this._readerId;
  }

  set readerId ( newReaderId ) {
    if ( typeof newReaderId === 'number' ) {
      this._readerId = newReaderId;
    }
  }

  get booksArray () {
    return this._books;
  }

  set booksArray ( newBooksList ) {
    if ( Array.isArray( newBooksList ) ) {
      this._books = [...newBooksList];
    }
  }

  toString () {
    return `${ this.firstName } ${this.lastName}`
  }

  borrowBook(book,library){
    const borroedBook = library.find(el => book.title === el.title)
    if(borroedBook && book instanceof ReaderBook){
      this._books.push(borroedBook)
    }
  }

}


class Book {
  constructor ( title, author ) {
    this._title = title
    this._author = author

  }


  get title () {
    return this._title;
  }

  get author () {
    return this._author;
  }

  toString () {
    return `${ this._title } ${ this.author }`
  }

  isTheSameBook ( book ) {
    return book._title === this._title && book._author === this._author
  }

}


class LibraryBookBase extends Book {
  constructor ( title, author, bookId ) {
    super( title, author );
    this._bookId = bookid
    this._bookId = bookId;
  }

  get bookId () {
    return this._bookId;
  }

}


class LibraryBook extends Book {
  constructor ( title, author, bookId, quantity ) {
    super( title, author );
    this._bookId = bookId
    this._quantity = quantity
  }


  get bookId () {
    return this._bookId;
  }

  set bookId ( newId ) {
    if ( typeof newId === 'number' ) {
      this._bookId = newId;
    }
  }

  get quantity () {
    return this._quantity;
  }

  set quantity ( newQuantity ) {
    if ( typeof newQuantity === 'number' ) {
      this._quantity = newQuantity;
    }
  }

  toString () {
    return `${ this._title } ${ this._author }`
  }

  increaseQuantityBy ( amount ) {
    if ( typeof amount === 'number' ) {
      this.quantity += amount
    }
  }

  decreaseQuantityBy ( amount ) {
    if ( typeof amount === 'number' ) {
      this.quantity -= amount
    }
  }

}


class ReaderBook extends Book {
  constructor ( title, author, bookId, expirationDate ) {
    super( title, author );
    this._bookId = bookId
    this._expirationDate = expirationDate
  }

  get bookId () {
    return this._bookId;
  }

  set bookId ( newBookId ) {
    if ( typeof newBookId === 'string' ) {
      this._bookId = newBookId;
    }
  }

  get expirationDate () {
    return this._expirationDate;
  }

  set expirationDate ( newDate ) {
    if ( typeof newDate === 'string' ) {
      this._expirationDate = newDate;
    }
  }

  toString () {
    return `${ this.author } ${ this.title }`
  }


}


const newBook = new Book( 'asdasd', 'dsdfsdf' )


