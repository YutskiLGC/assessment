function getTotalBooksCount(books) {
  return books.length;
}
function getTotalAccountsCount(accounts) {
  return accounts.length;
}
function getBooksBorrowedCount(books) {
  // Filter the books array to only include those that have not been returned
  const borrowedBooks = books.filter((book) => !book.borrows[0].returned);

  // Return the length of the filtered array
  return borrowedBooks.length;
}

function getMostCommonGenres(books) {
  // Step 1: Create an object to store the count of each genre
  const genreCount = books.reduce((acc, book) => {
    if (acc[book.genre]) {
      acc[book.genre]++;
    } else {
      acc[book.genre] = 1;
    }
    return acc;
  }, {});

  // Step 2: Convert the object to an array of objects with name and count keys
  const genres = [];
  for (let genre in genreCount) {
    genres.push({ name: genre, count: genreCount[genre] });
  }

  // Step 3: Sort the array by count in descending order and return the top five genres
  return genres
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}
function getMostPopularBooks(books) {
  // Create an array to hold book objects with their borrow counts
  const bookCounts = [];

  // Iterate over the books array and count the number of borrows for each book
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const count = book.borrows.length;
    const bookObj = { name: book.title, count: count };
    bookCounts.push(bookObj);
  }

  // Sort the bookCounts array by the borrow count
  bookCounts.sort((book1, book2) => book2.count - book1.count);

  // Return the first five elements of the sorted bookCounts array
  return bookCounts.slice(0, 5);
}
function getMostPopularAuthors(books, authors) {
  const authorMap = {};
  books.forEach((book) => {
    const author = authors.find((a) => a.id === book.authorId);
    if (author) {
      const authorName = `${author.name.first} ${author.name.last}`;
      if (authorMap[authorName]) {
        authorMap[authorName] += book.borrows.length;
      } else {
        authorMap[authorName] = book.borrows.length;
      }
    }
  });
  const authorList = Object.keys(authorMap).map((author) => ({
    name: author,
    count: authorMap[author],
  }));
  const sortedList = authorList.sort((authorA, authorB) =>
    authorA.count < authorB.count ? 1 : -1
  );
  return sortedList.slice(0, 5);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
