from django.urls import path
from .views import UpdateView

urlpatterns = [
    path('basic-info/', UpdateView.as_view(), name='update'),
]