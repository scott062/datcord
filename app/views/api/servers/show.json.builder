json.server do
  json.partial! 'api/servers/server', server: @server
end

json.channels do
  json.partial! 'api/channels/channel', channels: @channels
end

json.users do
  json.partial! 'api/users/user', members: @members
end
