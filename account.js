class Account {
  constructor ( name, balance ) {
    this._name = name;
    this._balance = balance;
    this._id = Account.counter++
  }

  static counter = 1

  set name ( newName ) {
    this._name = newName;
  }

  set balance ( newBalance ) {
    this._balance = newBalance;
  }

  get id () {
    return this._id;
  }

  set id ( newId ) {
    this._id = newId
  }

  get name () {
    return this._name;
  }

  get balance () {
    return this._balance;
  }


  credit ( amount ) {
    this.balance += amount
    return this.balance
  }

  debit ( amount ) {
    if ( amount > this.balance ) {
      return 'Amount exceeded balance.'
    }
    this.balance -= amount
  }

  transferTo ( anotherAccount, amount ) {
    if ( amount > this.balance ) {
      return 'Amount exceeded balance.'
    }
    this.debit( amount )
    anotherAccount.credit( amount )
  }

  static identifyAccounts ( accountFirst, accountSecond ) {
    return accountFirst.balance === accountSecond.balance && accountFirst.name === accountSecond.name
  }


  toString () {
    return `${ this.name }'s  balance is \$${ this.balance }.`
  }

}


let savingAcc = new Account( "Saving account", 2000 );
let cardAcc = new Account( "Card account", 1000 );


console.log( savingAcc.id )
console.log( savingAcc ); // Account { id: 0, _name: 'Saving account',_balance: 2000 }
console.log( cardAcc ); // Account { id: 1, _name: 'Card account', _balance:1000 }
console.log( savingAcc.balance ); // 2000
console.log( savingAcc.credit( 400 ) ); // 2400
console.log( savingAcc.balance ); // 2400
console.log( savingAcc.debit( 9000 ) ); //6600
savingAcc.transferTo( cardAcc, 1000 ); // 1400
console.log( savingAcc.balance ); // 1400
console.log( cardAcc.balance ); // 2000
let anotherAcc1 = savingAcc;
console.log( Account.identifyAccounts( savingAcc, anotherAcc1 ) ); // true
console.log( Account.identifyAccounts( savingAcc, cardAcc ) ); // false
console.log( savingAcc.toString() ); // Saving account's account balance is$1400.
