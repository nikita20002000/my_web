from django.shortcuts import render


def index(request):
    return render(request, 'main/index.html', {'title': 'Добро пожаловать!'})


def about(request):
    return render(request, 'main/about.html')


def contacts(request):
    return render(request, 'main/contacts.html')


def pixel_town(request):
    return render(request, 'main/pixel_town.html')


def help_me(request):
    return render(request, 'main/help.html')


def my_repos(request):
    return render(request, 'main/repos.html')


def apps(request):
    return render(request, 'main/apps.html')


def coding_ipsum(request):
    return render(request, 'main/applications/coding_ipsum.html')


def weather_app(request):
    return render(request, 'main/applications/weather.html')


def calc_app(request):
    return render(request, 'main/applications/calc.html')


def snake_me(request):
    return render(request, 'main/applications/cat_snake.html')


def flappy_cat(request):
    return render(request, 'main/applications/flappy.html')


def news_1(request):
    return render(request, 'main/all_news/1news.html')
