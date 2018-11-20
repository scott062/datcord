json.server do
  json.partial! 'api/servers/server', server: @server
end

json.channels do
  json.partial! 'api/channels/index', channels: @server.channels
end

json.users do
  json.partial! 'api/users/index', users: @server.users
end
