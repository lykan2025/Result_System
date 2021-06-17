from django.contrib import admin
from .models import Students

class StudentsAdmin(admin.ModelAdmin):
    list_display=('id','name','roll_number','proj','moc','wmc','es','pe','dip')

admin.site.register(Students,StudentsAdmin)


   
