export const fetchChannels = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/servers/${id}/channels`,
  });
};

export const fetchChannel = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/servers/${id}/channel/${id}`,
  });
};

export const createChannel = (channel) => {
  debugger
  return $.ajax({
    method: 'POST',
    url: `api/servers/${channel.server_id}/channels`,
    data: { channel }
  });
};

export const  deleteChannel = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/servers/channel/${id}`,
  });
};
