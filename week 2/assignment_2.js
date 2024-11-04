function fetchPromisified(url, options) {
    return new Promise((resolve, reject) => {
      fetch(url, options)
        .then(response => {
          if (!response.ok) {
            return reject(new Error(`HTTP error! status: ${response.status}`));
          }
          resolve(response.json()); 
        })
        .catch(reject);
    });
  }
  

  fetchPromisified('https://api.sampleapis.com/coffee/hot')
    .then(data => console.log(data))
    .catch(error => console.error(error));