json.partial! 'api/servers/server', server: @server


  json.partial! 'api/channels/channel', channels: @server.channels



  json.partial! 'api/users/user', members: @server.users
