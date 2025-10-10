from django.db import models

# Create your models here.
class Student(models.Model):
    name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100, default="NULL", null=False)
    age=models.IntegerField()
    email=models.EmailField(default="abc@gmail.com")

