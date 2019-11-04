from django.db import models
from django.urls import reverse # Used to generate URLs by reversing the URL patterns
import uuid # Required for unique book instances
 

class Pañol(models.Model):
    
	Nombre = models.CharField(max_length=200)
	Cantidad = models.CharField(max_length=200)
	Tipo = models.CharField(max_length=200)
	Fecha = models.CharField(max_length=200)
    
	def __str__(self):
		return self.title 
    
	def get_absolute_url(self):
		"""Returns the url to access a detail record for this book."""
		return reverse('Pañol-detail', args=[str(self.id)])


class Persona(models.Model):
    rut = models.CharField(max_length=10)
    nombre = models.CharField(max_length=50)
    apellidos = models.CharField(max_length=70)
    edad = models.IntegerField()
    telefono = models.CharField(max_length=12)
    email = models.EmailField()
    direccion = models.CharField(max_length=200)
    
    def __str__(self):
        return self.nombre

