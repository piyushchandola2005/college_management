from django.contrib import admin
from django.urls import path, include
from django.contrib.auth import views as auth_views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('dashboard/', include('dashboard.urls')),
    path('accounts/', include('accounts.urls')),  # login url
     path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('', include('accounts.urls')),  # Redirect root URL to accounts
]