from django.http import HttpResponse

def hello_view(request):
    return HttpResponse('Hello from backend. Faraz was here!')
