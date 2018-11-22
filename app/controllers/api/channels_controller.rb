class Api::ChannelsController < ApplicationController

  def new
    @channel = Channel.new(channel_params)
    if @channel.save
      render 'api/channels/show'
    else
      render json: @channel.errors.full_messages
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
