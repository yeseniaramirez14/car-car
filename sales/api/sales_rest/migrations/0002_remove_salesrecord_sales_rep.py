# Generated by Django 4.0.3 on 2022-05-10 03:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='salesrecord',
            name='sales_rep',
        ),
    ]
