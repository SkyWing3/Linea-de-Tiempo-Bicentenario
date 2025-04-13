from rest_framework import viewsets
from .serializer import MultimediaSerializer
from .models import multimedia

# Create your views here.
class MultimediaView(viewsets.ModelViewSet):
    serializer_class = MultimediaSerializer
    queryset = multimedia.objects.all()