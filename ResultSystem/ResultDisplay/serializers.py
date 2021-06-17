from rest_framework import serializers
from .models import Students

class Students_Serializer(serializers.ModelSerializer):
    class Meta:
        model=Students
        fields=('id','name','roll_number','proj','moc','wmc','es','pe','dip')