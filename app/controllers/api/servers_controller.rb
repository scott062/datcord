class Api::ServersController < ApplicationController

  before_action :require_login

  # def create
  #   @server = Server.new(server_params)
  #   if @server.save
  #     render 'api/servers/show'
  #   else
  #     render json: @server.errors.full_messages
  #   end
  # end

  # def destroy
  #   @server = Server.find(params[:id])
  #   if @server
  #     @server.destroy
  #     render 'api/servers/index'
  #   else
  #     render json: @server.errors.full_messages, status: 404
  #   end
  # end

  def index
    @servers = current_user.server_memberships
    if @servers
      render 'api/servers/index'
    else
      render json: ['You do not belong to any servers.']
    end
  end

  def show
    server = Server.find(params[:id])
    @channels = server.channels
    if @channels
      render 'api/channels/index'
    else
      render json: ['There are no channels.']
    end
  end

  private

  def server_params
    params.require(:server).permit(
      :server_name,
      :server_id,
      :avatar_url
    )
  end
end
