export const fetchcrypto = (page: number) => {
    return fetch(
      `http://localhost:3001/currencies?_page=${page}_per_page=20`
    ).then((r) => r.json());
  };
  