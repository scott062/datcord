class Api::ChannelsController < ApplicationController

  def create
  end

  def destroy
  end

  def index
    @channels 
  end

  def show
    @channels
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
