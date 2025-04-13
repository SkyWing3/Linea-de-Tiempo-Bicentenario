from django.db import models

# Create your models here.
class multimedia(models.Model):
    TIPO_CHOICES = [
        ('imagen', 'Imagen'),
        ('video', 'Video'),
        ('audio', 'Audio'),
        ('documento', 'Documento'),
    ]

    tipo = models.CharField(max_length=20, choices=TIPO_CHOICES)
    titulo = models.CharField(max_length=225)
    descripcion = models.TextField()
    url = models.URLField(max_length=500)
    fecha = models.DateField()
    fecha_subida = models.DateTimeField(auto_now_add=True)
    formato = models.CharField(max_length=10)
    creditos = models.CharField(max_length=255, blank=True, null=True)
    activo = models.BooleanField(default=True)

    def __str__(self):
        return self.titulo