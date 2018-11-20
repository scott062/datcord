json.partial! 'api/servers/server', server: @server

json.partial! 'api/channels/channel', channels: @channels

json.partial! 'api/users/user/', members: @members
