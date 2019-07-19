from django.urls import path

from rest_framework.routers import DefaultRouter

from .views import PostViewSet


app_name = 'post'

router = DefaultRouter()
router.register('',  PostViewSet, base_name='post-viewset')

urlpatterns = router.urls
