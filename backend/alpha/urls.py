
from django.urls import path
from . import views

urlpatterns = [
path('' , views.home , name="jaggu"),
path('api/get-quiz/' , views.get_quiz , name="get_quiz")
]