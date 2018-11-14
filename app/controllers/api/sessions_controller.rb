class Api::SessionsController < ApplicationController
  def create
    username = params[:user][:email]
    password = params[:user][:password]
    @user = User.find_by_credentials(email, password)
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ['Invalid email or password'], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render 'api/users/show'
    else
      render json: ['No User Logged In'], status: 404
    end
  end
end
