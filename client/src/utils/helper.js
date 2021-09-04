
import { useHistory } from 'react-router-dom'

export const PushTo = (path) => {
  window.location.pathname = path;
}


export const request = (url, options, fileType = null) => {
    if (options.headers) {
      options.headers.Authorization = `Bearer ${localStorage.getItem("auth_token")}`;
    };
  
    console.log("here are options:", options);
    return fetch(url, {
      ...options,
      mode: "cors",
    })
      .then((response) => response.json() || response)
      .then((json) => json)
      .catch((err) => ({ err }));
  };
  

  