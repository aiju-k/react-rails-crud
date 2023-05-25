Rails.application.routes.draw do
  get 'site/index'

  namespace :api do
    resources :events, only: %i[index show create destroy update]
  end
end
