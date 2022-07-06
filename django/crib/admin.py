 # Register your models here.
from django.core.exceptions import FieldDoesNotExist
from django.contrib import admin
from crib.models import ( Page, Post, PageMeta, PostMeta)

class ContentAdminSite(admin.AdminSite):
    site_header = "Content Pages admin"
    site_title = "Content Page Admin Portal"
    index_title = "Welcome to CRIB"
    app_label = "Content"

class PageMetaInline( admin.StackedInline): 
    list_display = (('title', 'description'), 'image' )
    model = PageMeta

class PageAdmin(admin.ModelAdmin):
    inlines = [ PageMetaInline, ]
    list_display = ('title', 'slug', 'status', 'author', )
    list_filter = ('status', 'author')
    search_fields = ('title',)


class PostMetaInline(admin.StackedInline):
    list_display = (('title', 'description'), 'image' )
    model = PostMeta

class PostAdmin(admin.ModelAdmin):
    inlines = [ PostMetaInline, ]
    list_display = ('title', 'slug', 'status', 'author', )
    list_filter = ('status', 'author')
    search_fields = ('title',)


crib_admin_site = ContentAdminSite(name='content')
crib_admin_site.register(Page, PageAdmin)
crib_admin_site.register(Post, PostAdmin)
