from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

app_name = 'dashboard'  # Ensure this is present

urlpatterns = [
    path('login/', auth_views.LoginView.as_view(template_name='accounts/login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout_view'),
    path('', views.dashboard_view, name='index'),
    path('timetable/', views.timetable_view, name='timetable_view'),
    path('exam/', views.exam_view, name='exam_view'),
    path('change_password/', views.change_password_view, name='change_password_view'),
    path('profile/', views.profile_view, name='profile_view'),
    path('admin/', views.admin_dashboard_view, name='admin'),
    path('teacher/', views.teacher_dashboard_view , name='teacher'),
    path('student/', views.student_dashboard_view, name='student'),
    path('student_dashboard/', views.student_dashboard_view, name='student_dashboard_view'),
]