from django.urls import path, include
from .views import hello_view
from django.contrib import admin

urlpatterns = [
    path('hello/', hello_view, name='hello'),
]
