Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :servers, only: [:create, :destroy, :show, :index] do
      resources :channels, only: [:create, :destroy, :index]
    end
    resources :channels, only: [:show] do
      resources :messages, only: [:index, :create, :show]
    end
  end

  root "static_pages#root"
end
