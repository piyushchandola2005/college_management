import os
import django
from django.contrib.auth.hashers import make_password

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'attendease.settings')
django.setup()

from accounts.models import Admin, Student

admin_users = [
    {'email': 'admin1@example.com', 'password': 'password123'},
    {'email': 'admin2@example.com', 'password': 'password456'},
]

student_users = [
    {'email': 'student1@example.com', 'password': 'password123'},
    {'email': 'student2@example.com', 'password': 'password456'},
]

for user_data in admin_users:
    user = Admin(email=user_data['email'], password=make_password(user_data['password']))
    user.save()

for user_data in student_users:
    user = Student(email=user_data['email'], password=make_password(user_data['password']))
    user.save()

print("Dummy data populated successfully.")
