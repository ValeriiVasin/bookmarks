Bookmarks::Application.routes.draw do
  devise_for :users
  resources :bookmarks, :only => [:index, :create, :update, :destroy]
  root :to => 'pages#index'
end
