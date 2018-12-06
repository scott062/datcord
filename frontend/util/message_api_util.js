export const fetchMessages = (channel_id) => {
  return $.ajax({
    method: 'GET',
    url: `api/channel/${channel_id}/messages`,
  });
};

export const fetchMessage = (channel_id, id) => {
  return $.ajax({
    method: 'GET',
    url: `api/channel/${channel_id}/messages/${id}`,
  });
};

export const createMessage = (message) => {
  return $.ajax({
    method: 'POST',
    url: `api/channels/${message.channel_id}/messages`,
    data: { message }
  });
};

// export const  deleteMessage = (id) => {
//   return $.ajax({
//     method: 'DELETE',
//     url: `api/messages/${id}`,
//   });
// };
