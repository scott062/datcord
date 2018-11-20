json.extract! server, :id, :admin_id, :server_name, :avatar_url
json.photo_url url_for(server.photo)
json.channel_ids server.channels.pluck(:id)
json.members server.users.pluck(:id)
