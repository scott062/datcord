json.servers do
  @servers.each do |server|
    json.set! server.id do
      json.partial! 'api/servers/server', server: server
    end
  end
end

json.users do
  @servers.each do |server|
    json.partial! 'api/users/index', users: server.users
  end
end

json.channels do
  @servers.each do |server|
    json.partial! 'api/channels/index', channels: server.channels
  end
end
