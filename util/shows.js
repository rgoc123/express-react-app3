export const fetchShow = (showId) => {
  return fetch(`/shows/${showId}`, {
    method: 'GET',
    async: true
  })
  .then(function(response) {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    return data;
  });
    // } else {
    //   console.log("error getting show");
    // }
  // });
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
