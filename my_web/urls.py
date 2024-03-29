# Внутри этого файла мы можем отслеживать различные URL адреса
from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main.urls')),
    path('all_news/', include('news.urls'))
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
