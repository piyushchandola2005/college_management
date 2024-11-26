

# Register your models here.
# dashboard/admin.py

from django.contrib import admin
from .models import Attendance  # Import your model

# Register your model with the admin site
admin.site.register(Attendance)