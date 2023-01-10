const tasksUrl = 'http://localhost:5000/tasks';

class Api {
  constructor(tasksUrl) {
    this.tasksUrl = tasksUrl;
  }

  create(data) {
    const JSONData = JSON.stringify(data);
    console.log(`Sending ${JSONData} to ${this.tasksUrl}`);
    const request = new Request(this.tasksUrl, {
        method: "POST",
        body: JSONData,
        headers: {
            "content-type": "application/json",
        },
    });

    console.log(request);
    return fetch(request)
        .then((result) => result.json())
        .then((data) => data)
        .catch((err) => console.log(err));
  }

  getAll() {
    return fetch(this.tasksUrl)
        .then((result) => result.json())
        .then((data) => data)
        .catch((err) => console.log(err));
  }

  update(id) {
    return fetch(`${this.tasksUrl}/${id}`, {method: 'PATCH'})
      .then((result) => result.json())
      .catch((err) => console.log(err));
  }

  remove(id) {
    return fetch(`${this.tasksUrl}/${id}`, {method: 'DELETE'})
      .then((result) => result)
      .catch((err) => console.log(err));
  }
}


const booksUrl = 'https://gik2f8-labs.herokuapp.com/books';

async function getAllBooks() {
const result = await fetch(booksUrl)
  .then((result) => result.json())
  .catch((e) => e);
return result;
}
async function getAll() {
    const result = await fetch(booksUrl)
      .then((result) => result.json())
      .catch((e) => e);
    return result;
  }

//hämtar Titel och författare från api
async function getBookDetails(id) {
const result = await fetch(booksUrl + "/" + id)
  .then((result) => result.json())
  .catch((e) => e);
console.log(`hej denna kommer från api.js 75${result.title}, ${result.author}`)
return { title: result.title, author: result.author };
}
