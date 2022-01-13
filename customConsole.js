class Console {
  constructor ( type ) {
    this._type = type
    this._history = []
  }

  get type () {
    return this._type;
  }

  history ( start = 0, end = 0 ) {

  }

  log ( ...args ) {
    const result = args.reduce( ( acc, val ) => {
      acc += (typeof val === 'string' || typeof val === 'number') ? val : JSON.stringify( val )
      return acc
    }, '' )


    this._history.push(JSON.stringify(result))
    return `${ this.type } : ${ result }`
  }
}


const myConsole = new Console( 'Regular' );
const fancyConsole = new Console( 'Fancy' );


console.log( myConsole.log( [1, 2, 3] ) );
console.log( myConsole.log( "ok : ", 1, 2, 3 ) );
console.log( fancyConsole.log( { a: 1, b: 2 } ) );
