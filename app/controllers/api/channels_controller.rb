class Api::ChannelsController < ApplicationController
  def create
    @channel = Channel.new(channel_params)
    if @channel.save
      render 'api/channels/show'
    else
      render json: @channel.errors.full_messages
    end
  end

  def show
    @channel = Channel.find(params[:id])
    @messages = @channel.messages
    if @channel
      render 'api/channels/show'
    else
      render json: @messages.errors.full_messages
    end
  end

  private

  def channel_params
    params.require(:channel).permit(
      :channel_name,
      :server_id,
      :communication_type
    )
  end
end
