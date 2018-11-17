Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resource :users, only: [:create]
    resource :servers, only: [:create, :destroy, :index]
  end

  root "static_pages#root"
end
