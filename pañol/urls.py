from django.urls import path
from . import views
from django.urls import include
from django.conf.urls import url

urlpatterns = [
  path('',views.index,name='index'),
  path('index/',views.index,name='index'),
  path('info/',views.info,name='info'),
  path('formulario/',views.formulario,name='formulario'),
  path('galeria/',views.galeria,name='galeria'),
  path('we/',views.we,name='we'),
]