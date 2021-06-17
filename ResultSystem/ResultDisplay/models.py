from django.db import models

# Create your models here.

class Students(models.Model):
    name=models.CharField(max_length=200)
    roll_number=models.CharField(max_length=20)
    proj=models.IntegerField(default=0)
    moc=models.IntegerField(default=0)
    wmc=models.IntegerField(default=0)
    es=models.IntegerField(default=0)	
    pe=models.IntegerField(default=0)
    dip=models.IntegerField(default=0)
    
    def __str__(self):
        return self.name+self.roll_number+self.proj


