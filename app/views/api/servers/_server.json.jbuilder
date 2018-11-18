json.extract! server, :id, :admin_id, :server_name, :avatar_url
json.members server.users.pluck(:id)
