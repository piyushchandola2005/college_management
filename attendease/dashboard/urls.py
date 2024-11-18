from django.urls import path
from . import views

urlpatterns = [
    path('update-attendance/', views.update_attendance, name='update-attendance'),
    path('marks-status/', views.marks_status, name='marks-status'),
]
