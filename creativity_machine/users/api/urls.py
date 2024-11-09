from django.urls import include, path
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('register/', include('users.api.register.urls')),
    path('update/', include('users.api.update.urls')),
    path('login/', include('users.api.login.urls')),
    path('logout/', include('users.api.logout.urls')),

    path('token-refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
