from django.shortcuts import render
from .models import Pañol,Persona
from django.views import generic

def index(request):
    return render(request, 'index.html')

def info(request):
    return render(request, 'info.html')

def formulario(request):
    return render(request, 'formulario.html')

def galeria(request):
    return render(request, 'galeria.html')

def we(request):
    return render(request, 'we.html')