# Generated by Django 5.1.2 on 2024-10-14 13:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_alter_user_gender'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='IQ',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
    ]
