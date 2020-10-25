export default ({ url, method })  => {
  return fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },

  })
  .then(res => res.json());
};
