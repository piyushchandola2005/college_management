from django.contrib.auth.views import LoginView
from django.shortcuts import render
from django.contrib.auth import authenticate, login

class CustomLoginView(LoginView):
    template_name = 'accounts/login.html'

    def form_valid(self, form):
        # Use the email for authentication
        email = form.cleaned_data['username']
        password = form.cleaned_data['password']
        user = authenticate(self.request, username=email, password=password)
        if user is not None:
            login(self.request, user)
            return super().form_valid(form)
        else:
            return self.form_invalid(form)

    def get_success_url(self):
        return '/dashboard/student_dashboard/'  # Redirect to the student dashboard after login

def signup_view(request):
    # Your signup view logic here
    return render(request, 'accounts/signup.html')