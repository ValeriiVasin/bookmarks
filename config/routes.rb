Bookmarks::Application.routes.draw do
  devise_for :users
  resources :bookmarks, :only => [:index, :create, :update, :destroy] do
    post :share, :on => :member
  end
  root :to => 'pages#index'
end
