import { atom, useAtom } from "jotai";
import { atomsWithQuery } from "jotai-tanstack-query";

type AccountantType = {
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

type AccountantResponseType = {
  results: AccountantType[];
  info: {
    page: number;
  };
};

const API_URL = "https://randomuser.me/api/";

const pageAtom = atom(1);

export const [accountantsAtom] = atomsWithQuery((get) => ({
  queryKey: ["accountants", get(pageAtom)],
  queryFn: async ({ queryKey: [, page] }) => {
    const res = await fetch(`${API_URL}?seed=abc&page=${page}&results=10`);
    const data: AccountantResponseType = await res.json();

    return {
      info: {
        ...data.info,
      },
      // extract only the data we need
      results: data.results.map(
        ({ cell, name, email, picture, login, gender }) => ({
          cell,
          name,
          email,
          picture,
          login,
          gender,
        })
      ),
    };
  },
}));
