from ResultDisplay.models import Students
import pandas as pd
def run():

    df=pd.read_excel('scripts\Result_dis.xlsx',engine='openpyxl')
    for index,row in df.iterrows():
        Students.objects.create(name=row['name'],roll_number=row['roll_number'],
        proj=row['project'],moc=row['moc'],wmc=row['wmc'],
        es=row['es'],pe=row['pe'],dip=row['dip'])
        



        