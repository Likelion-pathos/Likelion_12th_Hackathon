# Generated by Django 4.2.13 on 2024-08-03 04:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('datas', '0002_alter_rating_score'),
    ]

    operations = [
        migrations.AlterField(
            model_name='datamodel',
            name='image',
            field=models.URLField(max_length=1000, null=True),
        ),
        migrations.AlterField(
            model_name='datamodel',
            name='pageUrl',
            field=models.URLField(max_length=1000, null=True),
        ),
    ]
