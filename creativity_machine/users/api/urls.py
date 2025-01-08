from django.urls import include, path


from .views import (checkAuthenticatedView, GetCSRFToken, 
                    GetUsersView, GetUserView)

urlpatterns = [
    path('register/', include('users.api.register.urls')),
    path('login/', include('users.api.login.urls')),
    path('update/', include('users.api.update.urls')),
    path('delete/', include('users.api.delete.urls')),
    path('logout/', include('users.api.logout.urls')),
    path('check-authenticated/', checkAuthenticatedView.as_view()),
    path('get-csrf-token/', GetCSRFToken.as_view()),
    path('get_users/', GetUsersView.as_view()),
    path('get_user/', GetUserView.as_view()),
]
