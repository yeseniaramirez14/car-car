# Generated by Django 4.0.3 on 2022-05-10 05:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0003_alter_service_vin_alter_technician_employee_number'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='automobilevo',
            name='import_href',
        ),
    ]
