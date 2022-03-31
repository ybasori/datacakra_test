const baseUrl = "http://192.53.172.221:3000";

const api = {
  postAuthRegister: (formData: {
    name: string;
    email: string;
    password: string;
  }) => {
    return fetch(`${baseUrl}/api/authaccount/registration`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  postAuthLogin: (formData: { email: string; password: string }) => {
    return fetch(`${baseUrl}/api/authaccount/login`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  getUserData: (id: number, token: string) => {
    return fetch(`${baseUrl}/api/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getTouristsData: (page: number, token: string) => {
    return fetch(`${baseUrl}/api/Tourist?page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getTouristData: (id: string, token: string) => {
    return fetch(`${baseUrl}/api/Tourist/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  postTouristData: (form: any, token: string) => {
    return fetch(`${baseUrl}/api/Tourist`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  },
  putTouristData: (form: any, token: string) => {
    return fetch(`${baseUrl}/api/Tourist/${form.id}`, {
      method: "PUT",
      body: JSON.stringify(form),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  },
  deleteTouristData: (id: string, token: string) => {
    return fetch(`${baseUrl}/api/Tourist/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

export default api;
