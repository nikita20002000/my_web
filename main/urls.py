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
    path('cod_ipsum', views.coding_ipsum, name='cod_ipsum'),
    path('weather', views.weather_app, name='cod_weather'),
    path('calc', views.calc_app, name='cod_calc'),
    path('snake', views.snake_me, name='cod_snake'),
    path('flappy', views.flappy_cat, name='flappy_cat'),
    path('news1', views.news_1, name='first_one'),
    path('interpreter_p', views.interpreter_p, name='interpreter_p'),

]
