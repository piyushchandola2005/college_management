from django.contrib import admin
from django.urls import path, include
from accounts import views as accounts_views
from . import views

app_name = 'dashboard'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('accounts.urls')),
    path('dashboard/', include('dashboard.urls', namespace='dashboard')),  # Add namespace here
    path('', accounts_views.login_view, name='login'),
    path('student/', views.student_dashboard, name='student'),
    path('teacher/', views.teacher_dashboard, name='teacher'),
    path('admin/', views.admin_dashboard, name='admin'),
]