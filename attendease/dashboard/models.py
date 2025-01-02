from django.db import models
from django.contrib.auth.models import User
# Create your models here.

''' student_id: Stores the ID of the student.
    status: Stores the attendance status, which can either be "present" or "absent".
'''
class Attendance(models.Model):
    student_id = models.CharField(max_length=20)
    status = models.CharField(max_length=10, choices=[('present', 'Present'), ('absent', 'Absent')])
    
    def __str__(self):
        return f"Student {self.student_id}: {self.status}"
    
class Announcement(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    date_posted = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Mark(models.Model):
    student = models.ForeignKey(User, on_delete=models.CASCADE)
    subject = models.CharField(max_length=100)
    marks_obtained = models.IntegerField()
    total_marks = models.IntegerField()

    def __str__(self):
        return f'{self.student.username} - {self.subject}'