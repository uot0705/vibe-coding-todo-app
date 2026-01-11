Rails.application.routes.draw do
  get 'todos/deleted', to: 'todos#deleted'
  resources :todos, only: [:index, :create, :destroy]
end
