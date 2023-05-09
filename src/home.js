function getTotalBooksCount(books) {
  let totalBooks = 0;
  books.forEach(function (point) {
    totalBooks += 1;
  });
  return totalBooks;
}



function getTotalAccountsCount(accounts) {
  let totalAccounts = 0;
  accounts.forEach(function (account) {
    totalAccounts +=1;
  });
  return totalAccounts;
}



function getBooksBorrowedCount(books) {
  let result = books.filter((book) => book.borrows[0].returned === false );
  return result.length;
}



function getMostCommonGenres(books) {
  // return ordered list of most common genres //
  // limit list to top five //
  let result = []
  let genres = {}
  books.forEach((book) => {
    if (genres[book.genre]) {
      genres[book.genre]++
    } else {
      genres[book.genre] = 1;
    }
  })
  for (let genre in genres) {
    result.push({name: genre, count: genres[genre]})
  }
  return result.sort((genreA, genreB) => (genreA.count > genreB.count ? -1 : 1)).slice(0,5)
}



function getMostPopularBooks(books) {
  return books.map(book => {
    return {
      name: book.title,
      count: book.borrows.length
    }
  }).sort((bookA, bookB) => bookB.count - bookA.count).slice(0,5)
}



function getMostPopularAuthors(books, authors) {
  // return ordered list of most popular authors & limit to top five //
  // create new array for final result
   let result = []
   // loop through authors
   authors.forEach((author) => {
    // filter authors by ones that match author.id
    let bookAuth = books.filter((book) => book.authorId === author.id)
    // add how many times books were borrowed
    let bookAuthBorrows = bookAuth.reduce((borrowTot, book) => borrowTot + book.borrows.length, 0)
    // push final result into result array
    result.push ({name: author.name.first + " " + author.name.last, count: bookAuthBorrows})

   })
   // sort results from most to least and slice down to top five results
   return result.sort((authorA, authorB) => (authorA.count < authorB.count ? 1 : -1)).slice(0,5)


}



   

    



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
