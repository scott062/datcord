export const fetchMessages = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/messages',
  });
};

export const fetchMessage = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/messages/${id}`,
  });
};

export const createMessage = (message) => {
  return $.ajax({
    method: 'POST',
    url: `api/servers/:server_id/channels/:channel_id/messages`,
    data: { message }
  });
};

// export const  deleteMessage = (id) => {
//   return $.ajax({
//     method: 'DELETE',
//     url: `api/messages/${id}`,
//   });
// };
