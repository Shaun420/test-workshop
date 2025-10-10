from django.shortcuts import render
from .models import Student
from .form import StudentForm

# Create your views here.

def student_list(request):
    students = Student.objects.all()
    return render(request,"student_list.html",{'students': students})

