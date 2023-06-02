from django.shortcuts import render
from .models import Articles
from django.views.generic import DetailView, UpdateView


def news_home(request):
    news = Articles.objects.order_by('date')
    return render(request, 'news/news_home.html', {"news": news})


class NewsDetailView(DetailView):
    model = Articles
    template_name = 'news/detail_view.html'
    context_object_name = 'article'


