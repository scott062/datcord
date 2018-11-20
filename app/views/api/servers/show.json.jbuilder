json.partial! 'api/servers/server', server: @server


  json.partial! 'api/channels/index', channels: @server.channels



  json.partial! 'api/users/index', users: @server.users
