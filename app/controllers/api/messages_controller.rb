class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    if @message.save
      render 'api/messages/show'
    else
      render json: @message.errors.full_messages
    end
  end

  def show
    @message = Message.find(params[:id]);
    if @message
      render 'render api/messages/show'
    else
      render json: @message.errors.full_messages
    end
  end

  private

  def message_params
    params.require(:message).permit(:body, :author_id, :channel_id, :channel_type)
  end
end
