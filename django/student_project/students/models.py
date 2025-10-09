from django.db import models

class Student(models.Model):
	name = models.CharField(max_length=100, null=False)
	age = models.IntegerField(null=False)
	email = models.EmailField(unique=True, null=False)
	def __str__(self):
		return self.name