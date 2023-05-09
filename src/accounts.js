function findAccountById(accounts, id) {
  const found = accounts.find((account) => account.id === id) 
  return found;
};



function sortAccountsByLastName(accounts) {
 accounts.sort((lastNameA, lastNameB) => lastNameA.name.last > lastNameB.name.last ? 1 : -1);
  return accounts;
}



function getTotalNumberOfBorrows(account, books) {
  // return number of times an account has borrowed //
  const numOfBorrows = books.filter((book) => {
    return book.borrows.some((bookId) => bookId.id === account.id)
  })
  return numOfBorrows.length;
}



function getBooksPossessedByAccount(account, books, authors) {
  // return all books taken out by an account with author embedded //
  const booksCheckedOut = books.filter((book) => book.borrows[0].returned === false && book.borrows[0].id === account.id);
  const booksPossessedByAccount = booksCheckedOut.map((book) => {
   const author = authors.find((author) => author.id === book.authorId);

   return { ...book, author };

});

return booksPossessedByAccount;
}



module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
