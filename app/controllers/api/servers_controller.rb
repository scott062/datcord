class Api::ServersController < ApplicationController

  before_action :require_login

  def create
    @server = Server.new(server_params)
    @server.admin_id = current_user.id

    file = File.open('app/assets/images/session_background_scene.jpg')
    @server.photo.attach(io: file, filename: 'session_background_scene.jpg')
    if @server.save
      Member.create!({user_id: current_user.id, server_id: @server.id})
      Channel.create!({channel_name: "General", server_id: @server.id, communication_type: 'text'})
      render 'api/servers/show'
    else
      render json: @server.errors.full_messages
    end
  end

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
    @servers = current_user.server_memberships.includes(:channels, :users)
    if @servers
      render 'api/servers/index'
    else
      render json: ['You do not belong to any servers.']
    end
  end

  def show
    @server = current_user.server_memberships.find(params[:id])

    if @server
      render 'api/servers/show'
    else
      render json: @server.errors.full_messages
    end
  end

  private

  def server_params
    params.require(:server).permit(
      :server_name,
      :server_id,
      :avatar_url,
    )
  end
end
