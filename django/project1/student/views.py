from django.http import HttpResponse
from django.shortcuts import render
from .models import Student

def home(request):
	students = Student.objects.all()
	return render(request, "index.html", {"studentlist" : students})

def about(request):
	name = "Shaunak"
	kaam = "student"
	return render(request, "about.html", { "firstname": name, "kaam": kaam })

def index(request):
	return HttpResponse("<h1>Student Management Homepage</h1><p>This is my landing page</p>")