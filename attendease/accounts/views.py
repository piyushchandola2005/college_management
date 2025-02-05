from django.contrib.auth import authenticate, login
from django.shortcuts import redirect, render
from django.contrib import messages

def login_view(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        user = authenticate(request, username=email, password=password)
        if user is not None:
            login(request, user)
            if user.is_superuser:
                return redirect('dashboard:admin')
            elif user.groups.filter(name='Teachers').exists():
                return redirect('dashboard:teacher')
            else:
                return redirect('dashboard:student_dashboard_view')
        else:
            messages.error(request, 'Invalid email or password.')
    return render(request, 'accounts/login.html')