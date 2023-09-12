import { API_URL } from "config";

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

export const fetchData = async (page: number, resultsPerPage: number) => {
  const response = await fetch(
    `${API_URL}?seed=abc&page=${page}&results=${resultsPerPage}`
  );

  const data: AccountantResponseType = await response.json();

  return data;
};
