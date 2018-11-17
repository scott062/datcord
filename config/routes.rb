Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :session, only: [:create, :destroy]
    resources :users, only: [:create] do
      resources :servers, only: [:index]
    end
    resources :servers, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
end
