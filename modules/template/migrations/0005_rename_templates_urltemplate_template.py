# Generated by Django 3.2.9 on 2023-05-23 06:39

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ('template', '0004_urltemplate'),
    ]

    operations = [
        migrations.RenameField(
            model_name='urltemplate',
            old_name='templates',
            new_name='template',
        ),
    ]


