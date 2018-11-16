class Api::ServersController < ApplicationController

  def create
    @server = Server.new(server_params)
    if @server.save
      render 'api/servers/show'
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def show
  end

  def destroy
    @server = Server.find_by(server_params)
  end

  def index
    @servers
  end

  def edit
  end

  def update
  end

  def new
  end

  private

  def server_params
    params.require(:server).permit(:server_name, :server_id, :avatar_url)
  end
end
