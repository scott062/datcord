class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    @channel = Channel.find(message_params[:channel_id])
    if @message.save
      serialize_data = ActiveModelSerializers::Adapter::Json.new(MessageSerializer.new(message).serializable_hash
      MessagesChannel.broadcast_to channel, serialized_data
      head :ok
    end
  end

  private

  def message_params
    params.require(:message).permit(:body, :author_id, :channel_id)
  end
end