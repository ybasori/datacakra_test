const baseUri = "http://restapi.adequateshop.com";

const api = {
  postAuthRegister: (formData: {
    name: string;
    email: string;
    password: string;
  }) => {
    return fetch(`${baseUri}/api/authaccount/registration`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  postAuthLogin: (formData: { email: string; password: string }) => {
    return fetch(`${baseUri}/api/authaccount/login`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  getUserData: (id: number, token: string) => {
    return fetch(`${baseUri}/api/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getTouristsData: (page: number, token: string) => {
    return fetch(`${baseUri}/api/Tourist?page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getTouristData: (id: number, token: string) => {
    return fetch(`${baseUri}/api/Tourist/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  postTouristData: (form: any, token: string) => {
    return fetch(`${baseUri}/api/Tourist`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  },
  putTouristData: (form: any, token: string) => {
    return fetch(`${baseUri}/api/Tourist/${form.id}`, {
      method: "PUT",
      body: JSON.stringify(form),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  },
  deleteTouristData: (id: number, token: string) => {
    return fetch(`${baseUri}/api/Tourist/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

export default api;
