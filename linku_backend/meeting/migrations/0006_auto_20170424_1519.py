# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-04-24 15:19
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('meeting', '0005_auto_20170424_1256'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='name',
            field=models.CharField(max_length=20),
        ),
    ]