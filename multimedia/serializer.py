from rest_framework import serializers
from .models import multimedia

class MultimediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = multimedia
        fields = "__all__"