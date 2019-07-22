from django.utils.text import Truncator

from rest_framework import serializers

from .models import Post


class PostSerializer(serializers.ModelSerializer):
    tags = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = '__all__'

    def get_tags(self, instance):
        tags = instance.tags.split(',')
        return map(str.strip, tags)
