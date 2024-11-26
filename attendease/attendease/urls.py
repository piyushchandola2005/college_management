# attendease/urls.py

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),  # Admin route
    path('dashboard/', include('dashboard.urls')),  # Include your app's URLs
]