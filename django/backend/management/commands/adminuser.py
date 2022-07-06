import os
from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model

class Command(BaseCommand):
    help = """
    start user.
    """
    # def add_arguments(self, parser):
    #     parser.add_argument( '--model_type' )
    #     parser.add_argument( '--input_test' )

    def handle(self, *args, **options):
        print( f" {os.environ.get('DJ_USER')}, {os.environ.get('DJ_EMAIL')}, {os.environ.get('DJ_SECRET')}")
        # User = get_user_model()
        # User.objects.create_superuser(os.environ.get('DJ_USER'), os.environ.get('DJ_EMAIL'), os.environ.get('DJ_SECRET') )

        User = get_user_model()
        if not User.objects.filter(username=os.environ.get('DJ_USER')).exists():
            User.objects.create_superuser(username=os.environ.get('DJ_USER'),
                                          email=os.environ.get('DJ_EMAIL'),
                                          password=os.environ.get('DJ_SECRET'))


# if __name__ == '__main__':
#     main(sentence)
