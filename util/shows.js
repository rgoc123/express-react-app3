export const createShow = (show) => {
  fetch('/createShow', {
    method: 'POST',
    body: JSON.stringify(show),
    headers: {
      'content-type': 'application/json'
    }
  });
};

export const editShow = (showId, show) => {
  fetch(`/shows/${showId}`, {
    method: 'PUT',
    body: JSON.stringify(show),
    headers: {
      'content-type': 'application/json'
    }
  });
};
