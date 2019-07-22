from django.db import models


class Post(models.Model):
    title = models.CharField('제목', max_length=50)
    body = models.TextField('내용', blank=True)
    tags = models.CharField('태그', max_length=50, blank=True)
    publishedDate = models.DateField('작성일', auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = '-id',
