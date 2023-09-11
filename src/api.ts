export type AccountantType = {
  cell: string; // numer telefonu
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: { thumbnail: string; medium: string };
  login: {
    uuid: string;
  };
  gender: "male" | "female";
};

export type AccountantResponseType = {
  results: AccountantType[];
  info: {
    page: number;
  };
};

const API_URL = "https://randomuser.me/api/";

export const fetchData = async (page: number) => {
  const response = await fetch(`${API_URL}?seed=abc&page=${page}&results=5`);
  const data: AccountantResponseType = await response.json();
  return data;
};
