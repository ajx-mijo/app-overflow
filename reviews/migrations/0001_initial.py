# Generated by Django 4.1.4 on 2022-12-08 13:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('apps', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField(max_length=500)),
                ('version', models.CharField(max_length=50)),
                ('ux_rating', models.PositiveIntegerField()),
                ('design_rating', models.PositiveIntegerField()),
                ('accessibility_rating', models.PositiveIntegerField()),
                ('performance_rating', models.PositiveIntegerField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('app', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reviews', to='apps.app')),
            ],
        ),
    ]
