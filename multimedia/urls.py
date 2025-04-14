from django.urls import path, include
from rest_framework import routers
from multimedia import views

router = routers.DefaultRouter()
router.register(r'multimedia', views.MultimediaView, 'multimedia')

urlpatterns = [
    path("api/", include(router.urls)),
]