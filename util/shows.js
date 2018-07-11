export const createShow = (show) => {
  return fetch('/createShow', {
    method: 'POST',
    body: JSON.stringify(show),
    headers: {
      'content-type': 'application/json'
    }
  });
};

export const fetchShow = (showId) => {
  return fetch(`/shows/${showId}`, {
    method: 'GET',
    async: false
  }).then((data) => {
    if (data.ok) {
      data.json().then((data) => data);
    } else {
      console.log("error getting show");
    }
  });
}

export const editShow = (showId, show) => {
  return fetch(`/shows/${showId}`, {
    method: 'PUT',
    body: JSON.stringify(show),
    headers: {
      'content-type': 'application/json'
    }
  });
};
