from django.db import models

# Create your models here.

''' student_id: Stores the ID of the student.
    status: Stores the attendance status, which can either be "present" or "absent".
'''
class Attendance(models.Model):
    student_id = models.CharField(max_length=20)
    status = models.CharField(max_length=10, choices=[('present', 'Present'), ('absent', 'Absent')])
    
    def __str__(self):
        return f"Student {self.student_id}: {self.status}"