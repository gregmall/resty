const fetchApi = ({ url, method, text })  => {
  if(method !=='GET'){
    return fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      text: JSON.stringify
    })
      .then(res => res.json());
} else {
    return fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' }
    })
  }
};
export default fetchApi;
