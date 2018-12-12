class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    @user.avatar_url = "please find a photo"
    file = File.open('app/assets/images/logo_url_2.png')
    @user.photo.attach(io: file, filename: 'logo_url_2.png')
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = current_user
    if @user
      render 'api/users/show'
    else
      render json: @user.errors.full_messages
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :username, :password, :avatar_url)
  end
end
