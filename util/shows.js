export const fetchShows = () => {
  return fetch('/shows', {
    methods: 'GET',
    async: false
  })
  .then(function(response) {
    return response.json();
  })
  .then((data) => {
    return data;
  });
}

export const fetchShow = (showId) => {
  return fetch(`/shows/${showId}`, {
    method: 'GET',
    async: false
  })
  .then(function(response) {
    return response.json();
  })
  .then((data) => {
    return data;
  });
}

export const createShow = (show) => {
  return fetch('/createShow', {
    method: 'POST',
    body: JSON.stringify(show),
    headers: {
      'content-type': 'application/json'
    }
  });
};

export const editShow = (showId, show) => {
  return fetch(`/shows/${showId}`, {
    method: 'PUT',
    body: JSON.stringify(show),
    headers: {
      'content-type': 'application/json'
    }
  });
};
