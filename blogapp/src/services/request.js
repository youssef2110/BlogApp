
const request = (url, options) => {
    const response = fetch(`${process.env.REACT_APP_API}${url}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
        ...options.headers,
      },
      ...options,
    }).then(res => res.json());
    return response;
  };
  
  export const get = (url, options) =>
    request(url, { ...options, method: 'GET' });
  
