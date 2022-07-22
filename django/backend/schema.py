from graphene_django import DjangoObjectType
import graphene
from django.contrib.auth.models import User
# from .models import *

from crib.models import Post, Page, PageMeta

class PostQuery(DjangoObjectType):
    class Meta:
        model = Post
        fields = (
            "title",
            "content",
            "slug",
            "author",
            "status",
            "excerpt"

        )

class PageQuery(DjangoObjectType):
    class Meta:
        model = Page
        fields = (
            "id",
            "title",
            "content",
            "slug",
            "author",
            "excerpt",
            "status",
            "template"
        )

class PageMetaQuery(DjangoObjectType):
    class Meta:
        model = PageMeta
        fields = (
            "page_id",
            "title",
            "description",
            "image"
        )

class UserQuery(DjangoObjectType):
    class Meta:
        model = User


class Query(graphene.ObjectType):

    users = graphene.List(UserQuery)
    posts = graphene.List(PostQuery)
    pages = graphene.List(PageQuery)
    pages_meta = graphene.List(PageMetaQuery)

    page_by_slug = graphene.Field(PageQuery, slug=graphene.String())
    page_by_id = graphene.Field(PageQuery, id=graphene.String()) 

    def resolve_page_by_slug(self, info, slug):
        return Page.objects.get(slug=slug)

    def resolve_page_by_id(self, info, id):
        return Page.objects.get(pk=id)
        # return list(Page.objects.filter(slug=slug).values())[0]

    def resolve_pages(self, info, **kwargs):
        return Page.objects.all()

    def resolve_pages_meta(self, info):
        return PageMeta.objects.all()

    def resolve_posts(self, info):
        return Post.objects.all()

    def resolve_users(self, info):
        return User.objects.all()


    # this defines a Field `hello` in our Schema with a single Argument `name`
    hello = graphene.String(name=graphene.String(default_value="stranger"))
    goodbye = graphene.String()

    # our Resolver method takes the GraphQL context (root, info) as well as
    # Argument (name) for the Field and returns data for the query Response
    def resolve_hello(root, info, name):
        return f'Hello {name}!'

    def resolve_goodbye(root, info):
        return 'See ya!'

schema = graphene.Schema(query=Query)
