from django.urls import path
from .views import UpdateUserView

urlpatterns = [
    path('', UpdateUserView.as_view()),
]