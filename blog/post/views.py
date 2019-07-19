from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response


from .models import Post
from .serializers import PostSerializer


class PostViewSet(ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
