class Api::ChannelsController < ApplicationController

  private

  def channel_params
    params.require(:channel).permit(
      :channel_name,
      :server_id,
      :communication_type
    )
  end
end
