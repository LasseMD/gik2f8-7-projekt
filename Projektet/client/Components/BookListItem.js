const BookListItem = (book) => {
  
  let html = `<li id="${book.id}"
                class="mx-auto book-list__item mb-1  last:mb-0 p-2 text-indigo-900 last:border-b-0 border-b border-indigo-900 cursor-pointer">
              ${book.author} - ${book.title} 
              </li>`;
              return html;
};