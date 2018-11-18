json.extract! user, :id, :username, :avatar_url
json.server_memberships user.server_memberships.pluck(:id)
