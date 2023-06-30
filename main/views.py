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
