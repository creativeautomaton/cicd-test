# Create your models here.
import collections
import datetime

from django.conf import settings
from django.core.exceptions import ObjectDoesNotExist
from django.db import models
from django.contrib.auth.models import User

# from tinymce.models import HTMLField
# from tinymce import models as tinymce_models

from ckeditor.fields import RichTextField
from ckeditor_uploader.fields import RichTextUploadingField

STATUS_CHOICES = (
    ('closed', 'closed'),
    ('open', 'open'),
)

PAGE_STATUS_CHOICES = (
    ('draft', 'draft'),
    ('inherit', 'inherit'),
    ('private', 'private'),
    ('publish', 'publish'),
)

PAGE_TYPE_CHOICES = (
    ('attachment', 'attachment'),
    ('page', 'page'),
    ('revision', 'revision'),
)
TEMPLATE = (
    ('default', 'Default'),
    ('homepage', 'Homepage'),
)
STATUS = (
    ('draft', 'Draft'),
    ('publish', 'Publish')
)

# USER_STATUS_CHOICES = (
#     (0, "active"),
# )

# READ_ONLY = getattr(settings, "WP_READ_ONLY", True)
# TABLE_PREFIX = getattr(settings, "WP_TABLE_PREFIX", "pages")
TABLE_PREFIX =  "crib_"


class Post(models.Model):
    title = models.CharField(max_length=300, unique=True, db_column='post_title')
    slug = models.SlugField(max_length=300, unique=True, db_column='post_slug')
    author = models.ForeignKey(User, on_delete=models.CASCADE )
    # template = models.IntegerField(choices=TEMPLATE, default=0, db_column='post_template')
    updated_on = models.DateTimeField(auto_now= True, db_column='post_updated_on')
    status = models.CharField(max_length=40, choices=STATUS, default=STATUS[0][0], db_column='post_status')
    created_on = models.DateTimeField(auto_now_add=True, db_column='post_created_on' )
    content = RichTextUploadingField(db_column='post_content', config_name='default')
    excerpt = models.TextField(db_column='post_excerpt', )


    class Meta:
        ordering = ['-created_on']

    def __str__(self):
        return self.title

class PostMeta(models.Model):
    """
    Post meta data.
    """

    # id = models.IntegerField(db_column='meta_id', primary_key=True)
    post_id = models.ForeignKey(Post, related_name='meta', db_column='post_id', on_delete=models.CASCADE)
    title = models.CharField(blank=True, max_length=200, db_column='meta_title')
    description = models.TextField(blank=True, max_length=400, db_column='meta_content',)
    image = models.ImageField(blank=True, upload_to='post-meta')

    class Meta:
        managed = True

    def __unicode__(self):
        return u"%s: %s" % (self.key, self.value)

class Page(models.Model):
    title = models.CharField(max_length=300, unique=True, db_column='page_title')
    slug = models.SlugField(max_length=300, unique=True, db_column='page_slug')
    author = models.ForeignKey(User, on_delete=models.CASCADE )
    template = models.CharField(max_length=40, choices=TEMPLATE, default=TEMPLATE[0][0], db_column='page_template')
    updated_on = models.DateTimeField(auto_now= True, db_column='page_updated_on')
    status = models.CharField(max_length=40, choices=STATUS, default=STATUS[0][0], db_column='page_status')
    created_on = models.DateTimeField(auto_now_add=True, db_column='page_created_on' )
    content = RichTextUploadingField(db_column='page_content', config_name='default')
    excerpt = models.TextField(db_column='page_excerpt')

    class Meta:
        ordering = ['-created_on']

    def __str__(self):
        return self.title

class PageMeta(models.Model):
    """
    Page meta data.
    """

    # id = models.IntegerField(db_column='meta_id', primary_key=True)
    page_id = models.ForeignKey(Page, related_name='meta', db_column='page_id', on_delete=models.CASCADE)
    title = models.CharField(blank=True, max_length=200, db_column='meta_title')
    description = models.TextField(blank=True, max_length=400, db_column='meta_content',)
    image = models.ImageField(blank=True, upload_to='page-meta')

    class Meta:
        # db_table = '%s_page_meta' % TABLE_PREFIX
        managed = True 

    def __unicode__(self):
        return u"%s: %s" % (self.key, self.value)
