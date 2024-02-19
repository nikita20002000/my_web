from django.shortcuts import render


# Актуальное
def index(request):
    return render(request, 'main/index.html', {'title': 'Добро пожаловать!'})


def projects(request):
    return render(request, 'main/projects.html')


def about(request):
    return render(request, 'main/about.html')


def console(request):
    APIKEY = {'text_variable': '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'}
    return render(request, 'main/console.html', APIKEY)


def interpreter(request):
    return render(request, 'main/Projects/interpreter.html')



# Устаревшее
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


def interpreter_p(request):
    return render(request, 'main/applications/interpreter_p.html')


def news_2(request):
    return render(request, 'main/all_news/2news.html')


def privacy(request):
    return render(request, 'main/docs/privacy_policy.html')


def it_inf(request):
    return render(request, 'main/applications/it_inf.html')
