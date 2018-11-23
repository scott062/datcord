export const fetchChannels = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/servers/${id}/channels`,
  });
};

export const fetchChannel = (server_id, channel_id) => {
  return $.ajax({
    method: 'GET',
    url: `api/servers/${server_id}/channels/${channel_id}`,
  });
};

export const createChannel = (channel) => {
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
