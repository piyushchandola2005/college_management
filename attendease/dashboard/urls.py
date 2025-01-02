from django.urls import path
from .views import admin_dashboard_view, student_dashboard_view,change_password_view,exam_view,timetable_view, profile_view

urlpatterns = [
    path('admin_dashboard/', admin_dashboard_view, name='admin_dashboard'),
    path('student_dashboard/', student_dashboard_view, name='student_dashboard'),
    path('student_dashboard/', student_dashboard_view, name='student_dashboard'),
    path('timetable/', timetable_view, name='timetable'),
    path('exam/', exam_view, name='exam'),
    path('change_password/', change_password_view, name='change_password'),
    path('profile/', profile_view, name='profile'),
]