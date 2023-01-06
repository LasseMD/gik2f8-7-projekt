const BookDetail = (bookDetail) => {
let html = `
       
              <div id="bookDetail" class="max-w-sm  overflow-hidden shadow-lg
              rounded-xl bg-gradient-to-tr from-red-600 to-red-100  h-screen">
      <div class="px-6 py-4">
                <li>Författare: ${bookDetail.author}</li>
                <li>Sidor: ${bookDetail.pages}</li>
    </div>`;
    return html;
  };

