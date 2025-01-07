from django.urls import path
from .views import UpdateUserView, PasswordResetView

urlpatterns = [
    path('', UpdateUserView.as_view()),
    path('forgetpassword/', PasswordResetView.as_view()),
]