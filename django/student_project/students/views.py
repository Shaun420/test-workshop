from django.shortcuts import render
from django.http import HttpResponse

def home(request):
	# return HttpResponse("Hello world, you are at home page")
	return render(request, "home.html")

def about(request):
	return HttpResponse("<h1>This is my about page</h1><p>Some text content</p>")

def contacts(request):
	name = "Shaunak"
	age = 20
	return render(request, "contact.html", {"name" : name, "age": age})
