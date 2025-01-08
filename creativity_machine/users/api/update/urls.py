from django.urls import path
from .views import (UpdateUserView, PasswordResetView,
                    PasswordResetConfirmView)

urlpatterns = [
    path('', UpdateUserView.as_view()),
    path('forgetpassword/', PasswordResetView.as_view()),
    path('passwordreset-confirm/', PasswordResetConfirmView.as_view()),
]