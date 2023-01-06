class Api {
	url = "";
	constructor(url) {
		this.url = url;
	}

	create(data) {
		const JSONData = JSON.stringify(data);
		console.log(`Sending ${JSONData} to ${this.url}`);
		const request = new Request(this.url, {
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
		return fetch(this.url)
			.then((result) => result.json())
			.then((data) => data)
			.catch((err) => console.log(err));
	}

  update(id) {return fetch(`${this.url}/${id}`, {method: 'PATCH'}).then((result) => result.json()).catch((err) => console.log(err));}


  remove(id) {return fetch(`${this.url}/${id}`, {method: 'DELETE'}).then((result) => result).catch((err) => console.log(err));}

/* --------------------------------Lab 1 --------------------------------*/
  async getAll() {
	const result = await fetch(url)
	  .then((result) => result.json())
	  .catch((e) => e);
	return result;
  }

  async getBookDetails(id) {
	const result = await fetch(url + "/" + id)
	.then((result) => result.json())
	.catch((e) => e);
	console.log(result)
	return result;
  }

}


// const api2 = new Api('https://gik2f8-labs.herokuapp.com/books');

/* --------------------------------Lab 1 --------------------------------*/
// const url = 'https://gik2f8-labs.herokuapp.com/books';
