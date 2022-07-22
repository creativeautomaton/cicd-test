from django.db.models.signals import pre_save, post_delete
from django.dispatch import receiver
from crib.models import Page


@receiver(pre_save, sender=Page)
@receiver(post_delete, sender=Page)
def page_changed(sender, **kwargs):
    print("Page Changed")
