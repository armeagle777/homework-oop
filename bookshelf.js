class Library {
  constructor ( booksArray, readersArray ) {
    this._books = booksArray
    this._readers = readersArray
  }


  get books () {
    return this._books;
  }

  get readers () {
    return this._readers;
  }

  doHaveBook ( requestedBook ) {
    return requestedBook instanceof Book && this.books.includes( requestedBook )
  }

  addBook ( newBook ) {
    const index = this.books.findIndex( el => el === newBook )
    if ( newBook instanceof LibraryBook && index > 0 ) {
      this._books[ index ].quantity++
    } else if ( newBook instanceof LibraryBook ) {
      this._books.push( newBook )
      return this.books
    }
  }

  addBooks ( newBooks ) {
    for ( let book of newBooks ) {
      this.addBook( book )
    }

    return this.books
  }

  checkReaderId ( readerId ) {
    return this.readers.findIndex( reader => reader.readerId === readerId ) >= 0
  }

  lendBook ( book, readerId ) {
    return (this.doHaveBook(book) && this.checkReaderId(readerId)) ? book : false
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
    if ( typeof newLastName === 'string' ) {
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
    return `${ this.firstName } ${ this.lastName }`
  }

  borrowBook ( book, library ) {
    const borroedBook = library.find( el => book.title === el.title )
    if ( borroedBook && book instanceof ReaderBook ) {
      this._books.push( borroedBook )
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
    return book instanceof Book && book.title === this.title && book.author === this.author
  }

}


class LibraryBookBase extends Book {
  constructor ( title, author, bookId ) {
    super( title, author );
    this._bookId = LibraryBookBase.count++
  }


  static count = 0

  get bookId () {
    return this._bookId;
  }

}


class LibraryBook extends Book {
  constructor ( title, author, bookId, quantity ) {
    super( title, author );
    this._bookId = LibraryBook.count++
    this._quantity = quantity
  }

  static  count = 0

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


const newBook = new Book( 'You don\'t know JS', 'Kyle Simpson' )


const fakeBook = {
  _title: 'Learn JS',
  _author: 'Mickel Jackson'
}

const libraryBook1 = new LibraryBook( 'Samvel', 'Rafii', 13, 22 )

const learnJs = new Book( 'Learn JS', 'Mickel Jackson' )
const dontKnowJs = new Book( 'You don\'t know JS', 'Simpson Dzia' )
const shunnUKatun = new Book( 'SHunn u katun', 'Hovhannes Tumanyan' )

const reader1 = new Reader( 'Hrach', 'Tovmasyan', 43, [learnJs] )
const reader2 = new Reader( 'Hrant', 'Toghatyan', 13, [learnJs] )

const library1 = new Library( [learnJs, libraryBook1, dontKnowJs], [reader1, reader2])


// console.log('Librari1 Readers', library1.readers)
// console.log(library1.checkReaderId(4))


console.log(library1.lendBook(learnJs,43))

