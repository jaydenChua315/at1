from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _

class Question(models.Model):
    question_text = models.CharField(max_length=200)
    answer_text = models.TextField()
    category = models.CharField(max_length=50, default='General')  # Adding the 'category' field

    def __str__(self):
        return self.question_text
