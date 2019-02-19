# frozen_string_literal: true

Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
  get 'auth/:provider/callback', to: 'sessions#create'
  get 'signout', to: 'sessions#destroy', as: 'signout'
  get 'sessions/create'
  get 'sessions/destroy'

  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }

  resources :sessions, only: %i[create destroy]
  resource :home, only: [:show]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resource :chats
end
