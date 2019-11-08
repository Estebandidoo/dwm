from django.db import models
from django.urls import reverse # Used to generate URLs by reversing the URL patterns
import uuid # Required for unique book instances
 

class Pañol(models.Model):
    
	Nombre = models.CharField(max_length=200)
	Cantidad = models.CharField(max_length=200)
	Tipo = models.CharField(max_length=200)
	Fecha = models.CharField(max_length=200)
    
	def __str__(self):
		return self.Nombre 
		self.save()
    
class Persona(models.Model):
    Nombre = models.CharField(max_length=50)
    Apellidos = models.CharField(max_length=70)
    Email = models.CharField(max_length=200)
    Contraseña = models.CharField(max_length=50)
    #fecha = models.DateTimeField(auto_now_add=true)
    
    def __str__(self):
        return self.Nombre
	

