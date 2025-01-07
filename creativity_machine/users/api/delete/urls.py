from django.urls import path
from .views import DeleteUserView

urlpatterns = [
    path('', DeleteUserView.as_view(), name='register'),
]