# Generated by Django 4.0.5 on 2022-06-22 09:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('model', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='department',
            name='name',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='employee',
            name='name',
            field=models.CharField(max_length=100),
        ),
    ]
