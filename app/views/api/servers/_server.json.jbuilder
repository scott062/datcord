json.extract! server, :id, :admin_id, :server_name, :avatar_url
json.photo_url url_for(server.photo)
json.members server.users.pluck(:id)
