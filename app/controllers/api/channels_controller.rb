class Api::ChannelsController < ApplicationController
  def create
    @channel = Channel.new(channel_params)
    if @channel.save
      serialized_data = ActiveModelSerializers::Adapter::Json.new(ChannelsSerializer.new(channel)).serialize_hash
      ActionCable.server.broadcast 'channels_channel', serialized_data
      head :ok
    end
  end

  def show
    @channel = Channel.find(params[:id])
    @messages = @channel.messages
    if @messages
      render 'api/messages/index'
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
