json.set! server do
  json.partial! 'api/servers/server', server: @server
end

json.set! channels do
  json.partial! 'api/channels/channel', channels: @channels
end

json.set! users do
  json.partial! 'api/users/user', members: @members
end
