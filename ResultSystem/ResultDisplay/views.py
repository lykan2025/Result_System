from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import viewsets
from .serializers import Students_Serializer
from .models import Students
from rest_framework import status as http_status

class StudentsView(viewsets.ModelViewSet):
    serializer_class=Students_Serializer
    queryset=Students.objects.all()
    

    def get_data(self,request):
        print(request.data)
        student=Students.objects.filter(roll_number=request.data.get("roll"))
        if(student):
            serializer=Students_Serializer(student,many=True)
            data=serializer.data
            return Response(data)
        else:
            return Response(False)
