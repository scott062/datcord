export const fetchServers = (current_user) => {
  return $.ajax({
    method: 'GET',
    url: 'api/servers',
  });
};

export const fetchServer = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/servers/${id}`,
  });
};

export const createServer = (serverDetails) => {
  return $.ajax({
    method: 'POST',
    url: 'api/servers',
    serverDetails
  });
};

export const  deleteServer = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/servers/${id}`,
  });
};
