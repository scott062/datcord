json.extract! user, :id, :username, :avatar_url
json.server_memberships user.server_memberships.pluck(:id)
json.photo_url url_for(user.photo)
