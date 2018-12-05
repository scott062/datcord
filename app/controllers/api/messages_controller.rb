class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    @channel = Channel.find(@message.channel_id)
    @messages = @channel.messages
    
    if @message.save
      render 'api/channels/show'
    else
      render json: @message.errors.full_messages
    end
  end


  private

  def message_params
    params.require(:message).permit(:body, :author_id, :channel_id)
  end
end
