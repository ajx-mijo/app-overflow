# Generated by Django 4.1.4 on 2022-12-13 18:22

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='App',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('year', models.PositiveIntegerField()),
                ('site_images', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=500), blank=True, size=None)),
                ('description', models.TextField(max_length=1000)),
                ('version', models.CharField(max_length=50)),
                ('new_features', models.TextField(max_length=500)),
                ('logo', models.TextField(max_length=500)),
                ('link', models.CharField(max_length=200)),
                ('added_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
