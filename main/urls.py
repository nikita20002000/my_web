from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('about', views.about, name='about_me'),
    path('contacts', views.contacts, name='contact_page'),
    path('pixel_town', views.pixel_town, name='pixel_town'),
    path('help', views.help_me, name='help_me'),
    path('repo', views.my_repos, name='repos'),
    path('apps', views.apps, name='apps'),
]
