from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include 
from graphene_django.views import GraphQLView

from crib.admin import crib_admin_site

from .api import router

# local schema files
from .schema import schema

urlpatterns = [
    path('admin/', admin.site.urls),

    # Django REST Framework urls
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),

    #  GraphQL urls
    path('graphql/', GraphQLView.as_view(graphiql=True, schema=schema)),

    path('crib-admin/', crib_admin_site.urls),

    path('ckeditor/', include('ckeditor_uploader.urls')),

    path(r'^filer/', include('filer.urls')),

]

if settings.DEBUG:
    urlpatterns.extend(static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT))

# urlpatterns.append(path('', include('cms.urls')))

# the new django admin sidebar is bad UX in django CMS custom admin views.
# admin.site.enable_nav_sidebar = False
