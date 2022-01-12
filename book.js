class Author {
  constructor ( name, email, gender ) {
    this._name = name
    this._email = email
    this._gender = gender
  }

  set name ( newName ) {
    if ( typeof newName === 'string' ) {
      this._name = newName
    } else {
      throw new Error( 'This field should be a string!' )
    }
  }

  get name () {
    return this._name
  }

  get email () {
    return this._email;
  }

  set email ( value ) {
    if ( typeof value === 'string' ) {
      this._email = value;
    } else {
      throw new Error( 'This field should be a string!' )
    }
  }

  get gender () {
    return this._gender;
  }

  set gender ( value ) {
    if ( typeof value === 'string' && (value === 'male' || value === 'female') ) {
      this._gender = value.toLowerCase();
    } else {
      throw new Error( 'This field should be a string!' )
    }
  }


  toString () {
    return this._gender === 'male' ? `Mr. ${ this.name }` : `Ms. ${ this.name }`
  }
}


let author1 = new Author( "J. K. Rowling", "abc@gmail.com", "female" );


class Book {
  constructor ( title, author, price, quantity ) {
    this._title = title;
    this._author = author;
    this._price = price;
    this._quantity = quantity;
  }

  get title () {
    return this._title;
  }

  set title ( newTitle ) {
    this._title = newTitle;
  }

  get author () {
    return this._author;
  }

  set author ( newAuthor ) {
    this._author = newAuthor;
  }

  get price () {
    return this._price;
  }

  set price ( value ) {
    this._price = value;
  }

  get quantity () {
    return this._quantity;
  }

  set quantity ( value ) {
    this._quantity = value;
  }

  getProfit(){
    return this._price * this._quantity
  }

  toString () {
    return this._title
  }

}


let book1 = new Book( 'Shunn u katun', author1,3000, 3000 )


// Testing some methods
console.log( author1.gender );      // female
console.log( author1.name );        // J. K. Rowling
console.log( author1.toString() );  // Ms. J. K. Rowling

console.log( book1.getProfit() );

author1.name = 12;                 // throws error

