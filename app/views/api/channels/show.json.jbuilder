json.channel do
  json.partial! 'api/channels/channel', channel: @channel
end

json.partial! 'api/messages/index', messages: @messages
