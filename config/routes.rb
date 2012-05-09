Bookmarks::Application.routes.draw do
  devise_for :users
  resources :bookmarks, :only => [:index, :create, :update, :destroy] do
    get :share, :on => :member
  end
  root :to => 'pages#index'
end
