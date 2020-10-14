
const request = (url, options) => {
    const response = fetch(`https://jsonplaceholder.typicode.com${url}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
        ...options.headers,
      },
      ...options,
    }).then(res => res.json());
    return response;
  };
  
  export const checkStatus = response => {
    if (response.status === 200) {
      return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
  
    throw error;
  };
  export const get = (url, options) =>
    request(url, { ...options, method: 'GET' });
  
