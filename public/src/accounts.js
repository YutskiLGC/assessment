function findAccountById(accounts, id) {
  // Loop through the accounts array
  for (let i = 0; i < accounts.length; i++) {
    // If the current account object's ID matches the given ID, return it
    if (accounts[i].id === id) {
      return accounts[i];
    }
  }
  // If no account object is found with the given ID, return null
  return null;
}

function sortAccountsByLastName(accounts) {
  // Use the sort() method to sort the array of account objects
  accounts.sort(function(a, b) {
    // Extract the last names of the account objects
    let lastNameA = a.name.last.toLowerCase();
    let lastNameB = b.name.last.toLowerCase();
    // Compare the last names and return the appropriate value
    if (lastNameA < lastNameB) {
      return -1;
    }
    if (lastNameA > lastNameB) {
      return 1;
    }
    return 0;
  });
  // Return the sorted array of account objects
  return accounts;
}
function getTotalNumberOfBorrows(account, books) {
  // Initialize a counter variable to keep track of the number of borrows
  let count = 0;
  // Loop through the array of book objects
  for (let i = 0; i < books.length; i++) {
    // Get the array of borrows for the current book
    let borrows = books[i].borrows;
    // Loop through the array of borrows for the current book
    for (let j = 0; j < borrows.length; j++) {
      // If the account ID matches the ID of the current borrow, increment the counter
      if (account.id === borrows[j].id) {
        count++;
      }
    }
  }
  // Return the total number of borrows
  return count;
}

function getBooksPossessedByAccount(account, books, authors) {
  // Initialize an empty array to store the checked out books
  let checkedOutBooks = [];
  // Loop through the array of book objects
  for (let i = 0; i < books.length; i++) {
    // Get the array of borrows for the current book
    let borrows = books[i].borrows;
    // Get the author object for the current book
    let author = authors.find((author) => author.id === books[i].authorId);
    // Loop through the array of borrows for the current book
    for (let j = 0; j < borrows.length; j++) {
      // If the account ID matches the ID of the current borrow and the book has not been returned, add it to the checkedOutBooks array
      if (account.id === borrows[j].id && !borrows[j].returned) {
        checkedOutBooks.push({...books[i], author});
      }
    }
  }
  // Return the array of checked out books
  return checkedOutBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
