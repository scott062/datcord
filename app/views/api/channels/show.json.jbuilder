json.channel do
  json.partial! 'api/channels/channel', channel: @channel
end

if @messages
  json.partial! 'api/messages/index', messages: @messages
end 
