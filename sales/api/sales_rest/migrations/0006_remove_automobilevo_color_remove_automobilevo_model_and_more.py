# Generated by Django 4.0.3 on 2022-05-10 18:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0005_alter_customer_phone_number'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='automobilevo',
            name='color',
        ),
        migrations.RemoveField(
            model_name='automobilevo',
            name='model',
        ),
        migrations.RemoveField(
            model_name='automobilevo',
            name='year',
        ),
    ]
