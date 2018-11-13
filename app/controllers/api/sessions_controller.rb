class Api::SessionsController < ApplicationController
  def create
    username = params[:user][:username]
    password = params[:user][:password]
    @user = User.find_by_credentials(username, password)
    if @user
      login(@user)
      # what is render doing here
    else
      render json: ['Invalid username or password'], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      # what is render doing here
    else
      render json: ['No User Logged In'], status: 404
    end
  end

  def
end
