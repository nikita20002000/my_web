from django.shortcuts import render



def index(request):
    return render(request, 'main/index.html', {'title': 'Добро пожаловать!'})


def about(request):
    return render(request, 'main/about.html')
