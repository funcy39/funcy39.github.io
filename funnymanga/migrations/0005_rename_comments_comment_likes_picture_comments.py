# Generated by Django 4.1.5 on 2023-02-12 11:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('funnymanga', '0004_rename_comment_counts_comment_comments'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comment',
            old_name='comments',
            new_name='likes',
        ),
        migrations.AddField(
            model_name='picture',
            name='comments',
            field=models.IntegerField(default=0),
        ),
    ]