from django.contrib import admin
from django.urls import re_path, path, include

from django.views.generic import TemplateView

from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('api-auth', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('users/', include('users.api.urls')),
    path('', TemplateView.as_view(template_name='index.html')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]
